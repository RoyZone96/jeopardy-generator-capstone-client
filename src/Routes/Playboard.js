import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

export default class Playboard extends Component {
    state = {
        players: [],
        name: "",
        score: 0,
        category_one: "",
        category_two: "",
        category_three: "",
        category_four: "",
        category_five: "",
        category_six: ""
    }

    addPlayer = (event) => {
        event.preventDefault();
        this.setState({
            players: [...this.state.players, { name: this.state.name, score: this.state.score }],
            name: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    updateScore = (e, idx) => {
        console.log(e.target.value)
        this.setState({
            players: this.state.players.map((player, index) => (index === idx ? { ...player, score: player.score + Number(e.target.value) } : player))
        })
    }


    displayScore = (idx) => {
        return (
            <select onChange={(e) => this.updateScore(e, idx)}>
                <option value=""></option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
            </select>
        )
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/boards/${this.props.match.params.id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then((res) => {
                this.setState({
                    category_one: res.category_one,
                    category_two: res.category_two,
                    category_three: res.category_three,
                    category_four: res.category_four,
                    category_five: res.category_five,
                    category_six: res.category_six
                })
            })
    }
    

    render() {
        const { category_one, category_two, category_three, category_four, category_five, category_six } = this.state
        const currentBoardId = this.props.match.params.id
        let linkUrlOutput = `/playquestion/100/1/${currentBoardId}`
        // let categories = Data.data.map(cat => (<div className="divTableCell">{cat.category}</div>))
        let players = this.state.players.map((player, idx) => (
            <div>
                <p style={{ display: 'inline-block', margin: '2px 10px' }}>{player.name} - score: {player.score}</p>
                {this.displayScore(idx)}
            </div>
        ))
        let tableHtmlOutput = <div className="divTable">
            <div className="divTableBody">
                <div className="divTableRow">
                    <div className="divTableCell">
                        <h3>{category_one}</h3>
                    </div>
                    <div className="divTableCell">
                        <h3>{category_two}</h3>
                    </div>
                    <div className="divTableCell">
                        <h3>{category_three}</h3>
                    </div>
                    <div className="divTableCell">
                        <h3>{category_four}</h3>
                    </div>
                    <div className="divTableCell">
                        <h3>{category_five}</h3>
                    </div>
                    <div className="divTableCell">
                        <h3>{category_six}</h3>
                    </div>
                </div>
                <div className="divTableRow">
                    <div className="divTableCell">
                        {/* <Link to="/questions/100/1">100</Link> */}
                        <Link to={linkUrlOutput}>100</Link>
                    </div>
                    <div className="divTableCell"><Link to="/playquestion/100/2">100</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/100/3">100</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/100/4">100</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/100/5">100</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/100/6">100</Link></div>
                </div>
                <div className="divTableRow">
                    <div className="divTableCell"><Link to="/playquestion/200/1">200</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/200/2">200</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/200/3">200</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/200/4">200</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/200/5">200</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/200/6">200</Link></div>
                </div>
                <div className="divTableRow">
                    <div className="divTableCell"><Link to="/playquestion/300/1">300</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/300/2">300</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/300/3">300</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/300/4">300</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/300/5">300</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/300/6">300</Link></div>
                </div>
                <div className="divTableRow">
                    <div className="divTableCell"><Link to="/playquestion/400/1">400</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/400/2">400</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/400/3">400</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/400/4">400</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/400/5">400</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/400/6">400</Link></div>
                </div>
                <div className="divTableRow">
                    <div className="divTableCell"><Link to="/playquestion/500/1">500</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/500/2">500</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/500/3">500</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/500/4">500</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/500/5">500</Link></div>
                    <div className="divTableCell"><Link to="/playquestion/500/6">500</Link></div>
                </div>
            </div>
        </div>
        return (
            <section>
                <div>
                    <Link to="/myboards">
                        <button type="button"> Back </button>
                    </Link>
                    <section className="scoreboard">
                        <form onSubmit={this.addPlayer} className="add">
                            <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="name" required />
                            <button type="submit">Add player</button>
                        </form>
                        <div className="players">
                            <div className="player">
                                {players}
                            </div>
                        </div>
                    </section>
                </div>
                <section>
                    {tableHtmlOutput}
                </section>
            </section>
        )
    }
}