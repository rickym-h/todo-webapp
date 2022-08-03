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
                <label htmlFor="all">All</label>
                <br/>
                <input type="radio" id="today" name="filter" value="today" onChange={this.handleFilterChange}/>
                <label htmlFor="today">Today</label>
                <br/>
                <input type="radio" id="week" name="filter" value="week" onChange={this.handleFilterChange}/>
                <label htmlFor="week">This Week</label>
                <br/>
                <br/>
                <br/>
                {
                    // todo filter by selector
                    // all (default)
                    // today
                    // this week
                    // todo sort by selector
                    // sort by creation order (default)
                    // sort by date
                    // sort by priority
                }
                <input type="radio" id="creation" name="sort" value="creation" onChange={this.handleSortChange} defaultChecked={true} />
                    <label htmlFor="creation">Creation Order</label>
                <br/>
                <input type="radio" id="date" name="sort" value="date" onChange={this.handleSortChange}/>
                    <label htmlFor="date">Date</label>
                <br/>
                <input type="radio" id="priority" name="sort" value="priority" onChange={this.handleSortChange}/>
                    <label htmlFor="priority">Priority</label>
            </div>
        )
    }
}

export default Options;