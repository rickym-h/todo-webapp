import React, {Component} from 'react';

class InfoTile extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        if (props.message) {
            this.state = {
                message: props.message
            }
        } else {
            this.state = {
                message: ""
            }
        }

    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default InfoTile;