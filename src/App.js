import React, { Component } from "react";
import Overview from "./components/Overview"
import Options from "./components/Options"
import uniqid from "uniqid";
import './Styles.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        date: '',
        priority: '',
        id: uniqid()
      },
      tasks: [],
      filter: "all",
      sort: "creation",

    };

    // todo if localstorage valid, sync 'tasks' with localstorage

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
        priority: '',
        id: uniqid()
      },
    }, () => {
      console.log(this.state)
      // todo sync with localstorage
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

  render() {
    return (
        <div id={"main"}>
          <div id={"optionsPane"}>

            <Options updateSort={this.changeSort} updateFilter={this.changeFilter}/>

          </div>
          <div id={"taskPane"}>

            <Overview tasks={this.state.tasks} deleteFunction={this.deleteTask}/>

            <form onSubmit={this.onSubmitTask} id={"newTaskInterface"}>
              <label htmlFor={"taskInput"}>New Task</label>
              <input
                  type={"text"}
                  id={"taskInput"}
                  value={this.state.task.text}
                  onChange={this.handleTextChange}
                  required={true}
              />
              <input
                  type={"datetime-local"}
                  id={"dateInput"}
                  //value={this.state.task.date}
                  onChange={this.handleDateChange}
                />
              <select onChange={this.handlePriorityChange}>
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
