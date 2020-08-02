import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Data } from './dummy-store'

export default class Playboard extends Component {
    state = {
        players: [],
        name: "",
        score: 0
    }

    addPlayer = (event) => {
        event.preventDefault();
        this.setState({
            players: [...this.state.players, this.state.name]
        })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        let categories = Data.data.map(cat => (<div className="divTableCell">{cat.category}</div>))
        let players = this.state.players.map(player => (<p>{this.state.name}</p>))
        return (
            <section>
                <div>
                    <Link to="/myboards"><button type="button">
                        Back
          </button></Link>
                    <section className="scoreboard">
                        <form onSubmit= {this.addPlayer}className="add">
                            <input type="text" value = {this.state.name } onChange = {this.handleChange} placeholder="name" required/>
                            <button type="submit">Add player</button>
                        </form>
                        <div className="players">
                            <div className="player">
                                {players}
                            </div>
                        </div>

                    </section>
                </div>
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            {categories}
                            {/* <div className="divTableCell">{ categories.category }</div> */}
                            {/* <div className="divTableCell">{ cat.category }</div> */}
                            {/* <div className="divTableCell">{ cat.category }</div> */}
                            {/* <div className="divTableCell">{ cat.category }</div> */}
                            {/* <div className="divTableCell">{ cat.category }</div> */}
                            {/* <div className="divTableCell">{ cat.category }</div> */}
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell"><Link to="/playquestion/tesla/100/1">100</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mercedes/100/2">100</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/ford/100/3">100</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/gm/4">100</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mclaren/5">100</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/lexus/100/6">100</Link></div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell"><Link to="/playquestion/tesla/200/1">200</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mercedes/200/2">200</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/ford/200/3">200</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/gm/200/4">200</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mclaren/200/5">200</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/lexus/200/6">200</Link></div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell"><Link to="/playquestion/tesla/300/1">300</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mercedes/300/2">300</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/ford/300/3">300</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/gm/300/4">300</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mclaren/300/5">300</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/lexus/300/6">300</Link></div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell"><Link to="/playquestion/tesla/400/1">400</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mercedes/400/2">400</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/ford/400/3">400</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/gm/400/4">400</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mclaren/400/5">400</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/lexus/400/6">400</Link></div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell"><Link to="/playquestion/tesla/500/1">500</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mercedes/500/2">500</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/ford/500/3">500</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/gm/500/4">500</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/mclaren/500/5">500</Link></div>
                            <div className="divTableCell"><Link to="/playquestion/lexus/500/6">500</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}