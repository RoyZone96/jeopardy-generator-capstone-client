import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'


export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        value: '',
        touched: false
      },
      boardId: {
        value: '',
        touched: false
      },
      answer: {
        value: '',
        touched: false
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
      boardId: this.state.boardId.value,
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

  updateBoardId = (boardId) => {
    this.setState({
      boardId: {
				value: boardId,
				touched: true
			}
    })
	}
	
	updateQuestion = (question) => {
		this.setState({
		  question: {
				value: question,
				touched: true
			}
		})
	}

	updateAnswer = (answer) => {
		this.setState({
			answer: {
				value: answer,
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
            <textarea value={this.state.question.value} onChange={event => this.updateQuestion(event.target.value)} placeholder="Your content here" required />
          </div>
          <div className="wrapper">
            <label htmlFor="answer"> What is </label>
            <input type="text" value={this.state.answer.value} onChange={event => this.updateAnswer(event.target.value)} placeholder="answer" required />
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