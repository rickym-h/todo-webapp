import React, { Component } from "react";

class PriorityDisplay extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        // todo show different priority coloured divs
        const stringRep = {
            0: "No Priority",
            1: "Low Priority",
            2: "Medium Priority",
            3: "High Priority",
            4: "ASAP"
        }
        return (
            <div>{stringRep[this.props.value]}</div>
        )
    }

}

export default PriorityDisplay;