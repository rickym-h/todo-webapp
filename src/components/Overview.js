import React, {Component} from 'react';
import PriorityDisplay from "./PriorityDisplay";

class Overview extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleDeleteTaskEvent = (id) => {
        this.props.deleteFunction(id)
    }

    handleEditTaskEvent = (id) => {
        this.props.editTask(id)
    }

    datesAreOnSameDay = (first, second) => {
        return first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();
    }

    datesAreWithinWeek = (first, second) => {
        first = new Date(first.getFullYear(), first.getMonth(), first.getDate());
        second = new Date(second.getFullYear(), second.getMonth(), second.getDate());
        let difference = (second.getTime() - first.getTime())/1000;
        if (difference < 0) { return false; }
        return difference <= 604800;
    }

    getValidTasks = (tasks) => {
        let currentDate = new Date();
        switch (this.props.filter) {
            case "all":
                return tasks;
            case "today":
                return tasks.filter((t)=> {
                    let taskDate = new Date(t.date);
                    return this.datesAreOnSameDay(currentDate, taskDate);
                })
            case "week":
                return tasks.filter((t)=> {
                    let taskDate = new Date(t.date);
                    return this.datesAreWithinWeek(currentDate, taskDate);
                })
            default:
                console.log("ERROR - FILTER METHOD NOT RECOGNISED: " + this.props.filter)
                return tasks;
        }
    }

    sortTasks = (tasks) => {
        switch (this.props.sort) {
            case "creation":
                return tasks.sort(function(a,b){
                    a = new Date(a.creationDate)
                    b = new Date(b.creationDate)
                    return a - b;
                });
            case "date":
                return tasks.sort(function(a,b){
                    if (!a.date) {return -1}
                    if (!b.date) {return 1}
                    a = new Date(a.date)
                    b = new Date(b.date)
                    return a - b;
                });
            case "priority":
                return tasks.sort(function(a,b){
                    return b.priority - a.priority;
                });
            default:
                console.log("ERROR - SORT METHOD NOT RECOGNISED: " + this.props.filter)
                return tasks;
        }
    }

    render() {
        let myTasks = this.props.tasks;
        // filter out non-needed tasks
        myTasks = this.getValidTasks(myTasks);

        // sort by sort method
        myTasks = this.sortTasks(myTasks);

        return (
            <div className={"overview-container"}>
                <table>
                    <tr>
                        <th>Delete Task</th>
                        <th>Task Information</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Edit</th>
                    </tr>
                    {myTasks.map((t) => {
                        return (
                            <tr key={t.id}>
                                <th><button type={"button"} id={t.id} onClick={()=>this.handleDeleteTaskEvent(t.id)}>Click to Complete!</button></th>
                                <th><p>{t.text}</p></th>
                                <th><p>{t.date}</p></th>
                                {/*<th><div>{t.priority}</div></th>*/}
                                <th><PriorityDisplay value={t.priority}/></th>
                                <th><button type={"button"} id={"edit"+t.id} onClick={()=>this.handleEditTaskEvent(t.id)}>Click to Edit!</button></th>
                                {/*<td><button type={"button"} id={t.id} onClick={()=>this.handleDeleteTaskEvent(t.id)}>Click to Complete!</button></td>*/}
                                {/*<td><p>{t.text}</p></td>*/}
                                {/*<td><p>{t.date}</p></td>*/}
                                {/*<td><div>{t.priority}</div></td>*/}
                                {/*<td><button type={"button"} id={"edit"+t.id} onClick={()=>this.handleEditTaskEvent(t.id)}>Click to Edit!</button></td>*/}
                            </tr>
                        );
                    })}
                </table>
            </div>
        )
    }
}

export default Overview;