import React, {Component} from 'react';

class Overview extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        console.log(this.props)

    }

    handleClickEvent = (id) => {
        this.props.deleteFunction(id)
    }

    datesAreOnSameDay = (first, second) =>
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate();

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

    render() {
        let myTasks = this.props.tasks;
        // filter out non-needed tasks
        myTasks = this.getValidTasks(myTasks);

        // sort by sort method


        return (
            <div className={"overview-container"}>
                {myTasks.map((t) => {
                    return (
                        <div key={t.id} className={"task-item"}>
                            <button type={"button"} id={t.id} onClick={()=>this.handleClickEvent(t.id)}>Click to Complete!</button>
                            <p>{t.text}</p>
                            <p>{t.date}</p>
                            <div>{t.priority}</div>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default Overview;