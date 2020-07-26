import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
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
    //   const data = new FormData(event.target)
    // }
    console.log(this.state)
    console.log(this.props.match.params.value)
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