import React, {Component} from 'react';

class InfoTile extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default InfoTile;