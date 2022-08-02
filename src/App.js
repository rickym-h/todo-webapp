import React, { Component } from "react";
import Overview from "./components/Overview"
import uniqid from "uniqid";

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

    this.deleteTask = this.deleteTask.bind(this);
  }

  handeChange = (e) => {
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
        <div>
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor={"taskInput"}>New Task</label>
            <input
                type={"text"}
                id={"taskInput"}
                value={this.state.task.text}
                onChange={this.handeChange}/>
            <button type={"submit"}>Add Task</button>
          </form>
          <Overview tasks={this.state.tasks} deleteFunction={this.deleteTask}/>
        </div>
    )
  };
}

export default App;
