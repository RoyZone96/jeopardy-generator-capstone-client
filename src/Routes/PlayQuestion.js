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
    // const category_id = this.props.match.params.category_id
    const question_id = this.props.match.params.question_id
    const board_id = this.props.match.params.board_id
    console.log(question_id, board_id)
    let url = `${config.API_ENDPOINT}/questions/${question_id}`
    
    console.log(url)
    fetch(url, {
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
    const board_id = this.props.match.params.board_id
    console.log(board_id)
    return (
      <div className="wrapper">
        <Link to={`/play/${board_id}`}>
          <button type="button">BACK</button>
        </Link>
        <div>
          <div className="question-container">
            <p>{currentQuestion}</p>
          </div>
         
            <div className="answer-container">
              <span>What is  {this.state.isShown && (<span className="answer">{currentAnswer}</span> )} ?</span>
            </div>
         
          <div>
            <button type="button" className="reveal" onClick={this.toggleState}>
              Reveal
                  </button>
          </div>
        </div>
      </div>
    );
  }
}