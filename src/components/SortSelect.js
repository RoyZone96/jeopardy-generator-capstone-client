import React, { Component } from 'react'

export default class SortSelect extends Component {
    state={
        isSorted: false
    }


    handleToggle = () => {
        if (this.state.sorted) {
            this.props.sort('asc')
        }
        if (this.state.sorted) {
            this.props.sort('desc')
        }
        this.setState({ sorted: !this.state.sorted })
    }

    render() {
        return (
        <div className="sorter clearfix">
            <select name="sorting" id="sort-bar">
            <option value="name">A - Z</option> 
            <option value="recent">Recent</option>
           </select>
        </div>
        )
    }
}

