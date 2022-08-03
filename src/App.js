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
        id: uniqid()
      },
      tasks: [],
    };

    // todo if localstorage valid, sync with localstorage

    //this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
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
                  onChange={this.handleChange}/>
              <button type={"submit"}>Add Task</button>
            </form>
          </div>
        </div>
    )
  };
}

export default App;
