import React, { Component } from "react";
import Overview from "./components/Overview"
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
      tasks: this.state.tasks.concat(this.state.task),
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

  render() {
    return (
        <div id={"main"}>
          <div id={"optionsPane"}>
            <p>PLACE OPTIONS HERE</p>
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
                <option value="">No Priority</option>
                <option value="low">Low</option>
                <option value="med">Medium</option>
                <option value="high">High</option>
              </select>
              <button type={"submit"}>Add Task</button>
            </form>
          </div>
        </div>
    )
  };
}

export default App;
