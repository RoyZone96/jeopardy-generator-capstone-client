import React, { Component } from 'react'

export default class SortSelect extends Component {
    state={
        isSorted: false
    }

    // componentDidMount(){
    //     Promise.all([
    //         fetch(`${config.API_ENDPOINT}/boards/`)
    //     ])
    //         .then(([boardsRes]) => {
    //             if (!boardsRes.ok)
    //                 return boardsRes.json().then(e => Promise.reject(e));
    //             return Promise.all([boardsRes.json()]);
    //         })
    //         .then(([boards]) => {
    //             this.setState({ boards });
    //             console.log(boards)
    //         })
    //         .catch(error => {
    //             console.log({ error });
    //         });
    // }
    // }

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

