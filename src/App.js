import React, {Component} from "react";
import Overview from "./components/Overview"
import Options from "./components/Options"
import InfoTile from "./components/InfoTile";
import EditTaskModal from "./components/EditTaskModal";
import uniqueID from "uniqid";
import './Styles.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        date: '',
        priority: '0',
        id: uniqueID()
      },
      tasks: [],
      filter: "all",
      sort: "creation",
      currentEditingTask: "",

    };

    // if localstorage valid, sync 'tasks' with localstorage
    if (this.isLocalStorageAvailable()) {
      if (window.localStorage.getItem('tasks')) {
        try {
          this.state.tasks = JSON.parse(window.localStorage.getItem('tasks'));
        } catch {
          console.log("ERROR: Failed to load localstorage data...")
          this.state.tasks = [];
        }
      }
    }
    //this.deleteTask = this.deleteTask.bind(this);
  }



  handleTextChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        date: this.state.task.date,
        priority: this.state.task.priority,
        id: this.state.task.id,
      },
    });
  };

  handleDateChange = (e) => {
    this.setState({
      task: {
        text: this.state.task.text,
        date: e.target.value,
        priority: this.state.task.priority,
        id: this.state.task.id,
      },
    });
  };

  handlePriorityChange = (e) => {
    this.setState({
      task: {
        text: this.state.task.text,
        date: this.state.task.date,
        priority: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat({...this.state.task, ...{creationDate: new Date()}}),
      task: {
        text: '',
        date: '',
        priority: '0',
        id: uniqueID()
      },
    });

  };

  deleteTask = (taskID) => {
    const filteredTasks = this.state.tasks.filter(t => (t.id !== taskID));
    this.setState({
      tasks: filteredTasks
    })
  }

  getTaskByID = (id) => {
    return this.state.tasks.find((t)=>(t.id === id))
  }


  editTask = (taskID) => {

    let task = JSON.stringify(this.getTaskByID(taskID))

    this.setState({
      currentEditingTask: {task}
    })
  }

  submitTaskEdit = (task) => {

    let filteredTasks = this.state.tasks.filter(t => (t.id !== task.id));
    filteredTasks.push(task);
    this.setState({
      tasks: filteredTasks,
      currentEditingTask: null,
    })
  }

  changeSort = (sortMethod) => {
    this.setState({
      sort: sortMethod,
    });
  }

  changeFilter = (filterMethod) => {
    this.setState({
      filter: filterMethod,
    });
  }

  isLocalStorageAvailable = () => {
    let test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevState.tasks !== this.state.tasks) {
      // Tasks has updated
      if (this.isLocalStorageAvailable()) {
        window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
      }
    }
  }


  render() {

    let warningMessage = "";
    if ((this.state.filter !== "all") && (this.state.tasks.some((t) => { return !t.date; }))) {
      warningMessage = "Warning: Some tasks without an assigned due date are not being shown!";
    }

    let date = new Date();
    let minDateISOString = date.toISOString().slice(0,10);

    return (
        <div>
          <div id={"headerBar"}>
            <h1>My Todo Webapp</h1>
          </div>
          <div id={"main"}>
            <div id={"optionsPane"}>

              <Options updateSort={this.changeSort} updateFilter={this.changeFilter}/>

            </div>
            <div id={"taskPane"}>

              <EditTaskModal taskToEdit={this.state.currentEditingTask} finishEdit={this.submitTaskEdit}/>

              <InfoTile message={warningMessage}/>

              <h2>Create Task</h2>
              <form onSubmit={this.onSubmitTask} id={"newTaskInterface"}>
                <label htmlFor={"taskInput"}>Create Task</label>
                <input
                    type={"text"}
                    id={"taskInput"}
                    value={this.state.task.text}
                    onChange={this.handleTextChange}
                    required={true}
                />
                <input

                    type={"date"}
                    id={"dateInput"}
                    min={minDateISOString}
                    //value={this.state.task.date}
                    onChange={this.handleDateChange}
                />
                <select id={"priorityInput"} onChange={this.handlePriorityChange} value={this.state.task.priority} /*defaultValue={"0"}*/>
                  <option value="0">No Priority</option>
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                  <option value="4">ASAP</option>
                </select>
                <button type={"submit"}>Add Task</button>
              </form>
              <Overview tasks={this.state.tasks} deleteFunction={this.deleteTask} sort={this.state.sort} filter={this.state.filter} editTask={this.editTask}/>

            </div>
          </div>

          <div id={"footerBar"}>
            <h4><a href={"https://github.com/rickym-h/todo-webapp"}>View Source Code</a></h4>
          </div>
        </div>

    )
  };
}

export default App;
