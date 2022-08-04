import React, {Component} from 'react';
import "./Modal.css";

class EditTaskModal extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            currentTask: null
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.taskToEdit === this.props.taskToEdit) {
            return;
        }
        if (!this.props.taskToEdit) {
            return;
        }
        console.log("PROPS CHANGE VALID - SETTING STATE")
        this.setState({
            currentTask: JSON.parse(this.props.taskToEdit.task),
        })
    }

    handleFormChange = (e) => {
        console.log(e.target.value)
        let newTask = this.state.currentTask;
        switch (e.target.id) {
            case "editTask":
                newTask.text = e.target.value;
                this.setState({
                    currentTask: newTask
                })
                break;
            case "editDate":
                newTask.date = e.target.value;
                this.setState({
                    currentTask: newTask
                })
                break;
            case "editPriority":
                newTask.priority = e.target.value;
                this.setState({
                    currentTask: newTask
                })
                break;
            default:
        }
    }


    handleEditTask = (event) => {
        event.preventDefault()
        console.log(event)
        this.props.finishEdit(this.state.currentTask)
        this.setState({
            currentTask: null,
        })
    }

    render() {
        if (!this.state.currentTask) {
            return null;
        }

        let date = new Date();
        let minDateISOString = date.toISOString().slice(0,10);
        return (
            <div className={"modal"}>
                <div className={"modal-content"}>
                    <div className={"modal-header"}>
                        <h4 className={"modal-title"}>Edit Task</h4>
                    </div>
                    <div className={"modal-body"}>


                        <form id={"editTaskForm"}>

                            <label htmlFor={"editTask"}>Change Task</label>
                            <input
                                type={"text"}
                                id={"editTask"}
                                value={this.state.currentTask.text}
                                onChange={this.handleFormChange}
                                required={true}
                            />
                            <input

                                type={"date"}
                                id={"editDate"}
                                min={minDateISOString}

                                onChange={this.handleFormChange}
                            />
                            <select id={"editPriority"} onChange={this.handleFormChange} value={this.state.currentTask.priority} /*defaultValue={"0"}*/>
                                <option value="0">No Priority</option>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                                <option value="4">ASAP</option>
                            </select>
                        </form>
                    </div>
                    <div className={"modal-footer"}>
                        <button className={"modal-button"} form={"editTaskForm"} onClick={this.handleEditTask}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditTaskModal;