import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'


export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        value: ''
      },
      questionId: {
        value: ''
      },
      answer: {
        value: ''
      },
    }
  }

  submitQuestion = event => {
    this.setState({
      question: {value: event.target.value}
    });
  }

  submitAnswer = event => {
    this.setState({
      answer: { value: event.target.value }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // function checkSubmission(input) {
    
    const newQuestion = JSON.stringify({
      question: this.state.question.value,
      questionId: this.state.questionId.value,
      answer: this.state.answer.value
    })

      fetch(`${config.API_ENDPOINT}/questions`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: newQuestion
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(response => this.context.addNote(response))
      .then(
        this.props.history.push('/')
      )
      .catch(error => {
        alert(error.message)
      })
  }

  render() {
    return (
      <section>
        <Link to="/newboard"><button type="button">
          BACK
        </button></Link>
        <form onSubmit= { this.handleSubmit }>
          <div className="wrapper">
            <textarea value={this.state.question.value} onChange={this.submitQuestion} placeholder="Your content here" required />
          </div>
          <div className="wrapper">
            <label htmlFor="answer"> What is </label>
            <input type="text" value={this.state.answer.value} onChange={this.submitAnswer} placeholder="answer" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div className="error">
            <p> Error message shown here. </p>
          </div>
        </form>
      </section >
    )
  }
}