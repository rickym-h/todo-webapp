import React, {Component} from "react";
import Overview from "./components/Overview"
import Options from "./components/Options"
import InfoTile from "./components/InfoTile";
import uniqid from "uniqid";
import './Styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        date: '',
        priority: '0',
        id: uniqid()
      },
      tasks: [],
      filter: "all",
      sort: "creation",

    };

    // if localstorage valid, sync 'tasks' with localstorage
    if (this.isLocalStorageAvailable()) {
      if (window.localStorage.getItem('tasks')) {
        try {
          this.state.tasks = JSON.parse(window.localStorage.getItem('tasks'));
        } catch {
          console.log("Failed to load localstorage data...")
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
        id: uniqid()
      },
    });

  };

  deleteTask = (taskID) => {
    console.log("CALLED TO DELETE TASK " + taskID)
    const filteredTasks = this.state.tasks.filter(t => (t.id !== taskID));
    this.setState({
      tasks: filteredTasks
    })
  }

  changeSort = (sortMethod) => {
    console.log("Changing sort method to: " + sortMethod);
    this.setState({
      sort: sortMethod,
    });
  }

  changeFilter = (filterMethod) => {
    console.log("Changing filter method to: " + filterMethod);
    this.setState({
      filter: filterMethod,
    });
  }

  isLocalStorageAvailable =() => {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  }

  render() {

    // set localstorage
    if (this.isLocalStorageAvailable()) {
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    let warningMessage = "";
    if ((this.state.filter !== "all") && (this.state.tasks.some((t) => { return !t.date; }))) {
      warningMessage = "Warning: Some tasks without an assigned due date are not being shown!";
    }

    let date = new Date();
    let minDateISOString = date.toISOString().slice(0,10);

    return (
        <div id={"main"}>
          <div id={"optionsPane"}>

            <Options updateSort={this.changeSort} updateFilter={this.changeFilter}/>

          </div>
          <div id={"taskPane"}>

            <InfoTile message={warningMessage}/>

            <Overview tasks={this.state.tasks} deleteFunction={this.deleteTask} sort={this.state.sort} filter={this.state.filter}/>

            <form onSubmit={this.onSubmitTask} id={"newTaskInterface"}>
              <label htmlFor={"taskInput"}>New Task</label>
              <input
                  type={"text"}
                  id={"taskInput"}
                  value={this.state.task.text}
                  onChange={this.handleTextChange}
                  required={true}
              />
              {//todo make date require not past
              }
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
          </div>
        </div>
    )
  };
}

export default App;
