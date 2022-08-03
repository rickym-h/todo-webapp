import React, {Component} from 'react';

class Overview extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleClickEvent = (id) => {
        this.props.deleteFunction(id)
    }

    render() {
        return (
            <div className={"overview-container"}>
                {this.props.tasks.map((t) => {
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