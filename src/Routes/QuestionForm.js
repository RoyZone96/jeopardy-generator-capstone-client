import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import BoardsService from '../services/BoardsApiService'
import ApiContext from '../ApiContext'
import TokenService from '../services/TokenService'
import BoardsApiService from '../services/BoardsApiService'


export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question_text: {
        value: '',
        touched: false
      },
      question_answer: {
        value: '',
        touched: false
      },
    }
  }

  componentDidMount(){

  }

  submitQuestion = event => {
    this.setState({
      question_text: {value: event.target.value}
    });
  }

  submitAnswer = event => {
    this.setState({
      question_answer: { value: event.target.value }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // function checkSubmission(input) {
    
    const newQuestion = JSON.stringify({
      board_id: BoardsApiService.getBoardId(),
      question_text: this.state.question_text.value,
      question_answer: this.state.question_answer.value
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
      .then(response => this.context.addQuestion(response))
      .then(
        console.log(newQuestion),
        this.props.history.push('/')
      )
      .catch(error => {
        alert(error.message)
      })
  }

	
	updateQuestion = (question_text) => {
		this.setState({
		  question_text: {
				value: question_text,
				touched: true
			}
		})
	}

	updateAnswer = (question_answer) => {
		this.setState({
			question_answer: {
				value: question_answer,
				touched: true
			}
		})
	}

  render() {
    const {id} = this.props
    return (
      <section>
        <Link to={`/board/:${id}`}><button type="button">
          BACK
        </button></Link>
        <form onSubmit= { this.handleSubmit }>
          <div className="wrapper">
            <textarea value={this.state.question_text.value} onChange={event => this.updateQuestion(event.target.value)} placeholder="Your content here" required />
          </div>
          <div className="wrapper">
            <label htmlFor="question_answer"> What is </label>
            <input type="text" value={this.state.question_answer.value} onChange={event => this.updateAnswer(event.target.value)} placeholder="question_answer" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          {/* <div className="error">
            <p>  </p>
          </div> */}
        </form>
      </section >
    )
  }
}