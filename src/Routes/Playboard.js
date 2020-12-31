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
        category_six: "",
        existingBoardQuestions: []
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
        const url = `${config.API_ENDPOINT}/boards/${this.props.match.params.id}`
        console.log(url)
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(resBoardsBinary => {
                if (!resBoardsBinary.ok)
                    return resBoardsBinary.json().then(e => Promise.reject(e))
                return resBoardsBinary.json()
            })
            .then((resBoardsJson) => {
                console.log(resBoardsJson)
                console.log(resBoardsJson.id)
                this.setState({
                    category_one: resBoardsJson.category_one,
                    category_two: resBoardsJson.category_two,
                    category_three: resBoardsJson.category_three,
                    category_four: resBoardsJson.category_four,
                    category_five: resBoardsJson.category_five,
                    category_six: resBoardsJson.category_six
                })

                fetch(`${config.API_ENDPOINT}/questions/board/${resBoardsJson.id}`, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(resQuestionsBinary => {
                        if (!resQuestionsBinary.ok)
                            return resQuestionsBinary.json().then(e => Promise.reject(e))
                        return resQuestionsBinary.json()
                    })
                    .then((resQuestionsJson) => {
                        console.log(resQuestionsJson)
                        this.setState({
                            existingBoardQuestions: resQuestionsJson
                        })
                    })
            })
    }


    render() {
        const { category_one, category_two, category_three, category_four, category_five, category_six } = this.state
        const currentBoardId = this.props.match.params.id;
        let questionCategory = 1
        const question_points = 100
       
        // let categories = Data.data.map(cat => (<div className="divTableCell">{cat.category}</div>))
        let players = this.state.players.map((player, idx) => (
            <div>
                <p style={{ display: 'inline-block', margin: '2px 10px' }}>{player.name} - score: {player.score}</p>
                {this.displayScore(idx)}
            </div>
        ))
        const currentQuestions = this.state.existingBoardQuestions;

    console.log(currentQuestions)
    // console.log(currentBoardId)

    let questionsForBoardMap = ''
    //by default show there are no items
    if (currentQuestions.length === 0) {
      questionsForBoardMap = <p>No items here</p>
    }
    // if there are items 
    else {
      // display details for each one of the items
      questionsForBoardMap = currentQuestions.map((question, key) => {
        // console.log(question)
        let linkUrlOutput = `/playquestion/${question.question_category}/${question.id}/${question.board_id}/${question.question_points}`;
        let tableHtmlOutput = ''
        // if this is the last cell break the row on the next cell
        if ((key + 1) % 6) {
          tableHtmlOutput =
            <div className="divTableCell">
              <Link to={linkUrlOutput}>{question.question_points}</Link>
            </div>
        }
        else {
          tableHtmlOutput =
            <div className="divTableCell lastCell">
              <Link to={linkUrlOutput}>{question.question_points}</Link>
            </div>
        }

        return tableHtmlOutput
      })
    }
        
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
                <div className="tableWrapper">
          <div className="divTable">
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
               {questionsForBoardMap}
            </div>
          </div>
        </div>
                </section>
            </section>
        )
    }
}