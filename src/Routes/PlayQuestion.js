import React, { Component } from 'react'
import { Link } from "react-router-dom"
import config from '../config'


export default class PlayQuestion extends Component {
  state = {
    isShown: false,
    question_text: "",
    question_answer: ""
  }

  componentDidMount() {
    const category_id = this.props.match.params.category_id
    const question_id = this.props.match.params.question_id
    const board_id = this.props.match.params.board_id
    console.log(category_id, question_id, board_id)
    fetch(`${config.API_ENDPOINT}/questions/${this.props.match.params.id}`, {
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
        console.log(res)
        this.setState({
          question_text: res.question_text,
          question_answer: res.question_answer
        })
      })
      .catch(error => console.log({ error }))
  }

  toggleState = () => {
    this.setState({
      isShown: !this.state.isShown
    });
  }


  render() {
    let currentQuestion = this.state.question_text
    let currentAnswer = this.state.question_answer
    let currentBoardId = this.props.match.params.id
    return (
      <div>
        <Link to={`/play/${currentBoardId}`}>
          <button type="button">BACK</button>
        </Link>
        <div>
          <div className="wrapper">
            <p>{currentQuestion}</p>
          </div>
          {this.state.isShown && (
            <div className="wrapper">
              <p>What is <p className="answer">{currentAnswer}</p> ?</p>
            </div>
          )}
          <div>
            <button type="button" onClick={this.toggleState}>
              Reveal
                  </button>
          </div>
        </div>
      </div>
    );
  }
}