import React, {Component} from 'react';

class Options extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    handleSortChange = (input) => {
        this.props.updateSort(input.target.id)
    }

    handleFilterChange = (input) => {
        this.props.updateFilter(input.target.id)
    }


    render() {
        return (
            <div>
                <input type="radio" id="all" name="filter" value="all" onChange={this.handleFilterChange} defaultChecked={true} />
                <label className={"radioLabel"} htmlFor="all">All</label>
                <br/>
                <input type="radio" id="today" name="filter" value="today" onChange={this.handleFilterChange}/>
                <label className={"radioLabel"} htmlFor="today">Today</label>
                <br/>
                <input type="radio" id="week" name="filter" value="week" onChange={this.handleFilterChange}/>
                <label className={"radioLabel"} htmlFor="week">This Week</label>
                <br/>
                <br/>
                <br/>
                <input type="radio" id="creation" name="sort" value="creation" onChange={this.handleSortChange} defaultChecked={true} />
                    <label className={"radioLabel"} htmlFor="creation">Creation Order</label>
                <br/>
                <input type="radio" id="date" name="sort" value="date" onChange={this.handleSortChange}/>
                    <label className={"radioLabel"} htmlFor="date">Date</label>
                <br/>
                <input type="radio" id="priority" name="sort" value="priority" onChange={this.handleSortChange}/>
                    <label className={"radioLabel"} htmlFor="priority">Priority</label>
            </div>
        )
    }
}

export default Options;