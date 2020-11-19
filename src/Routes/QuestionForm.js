import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'


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

  static contextType = ApiContext;

  componentDidMount() {
    const category_id = this.props.match.params.category_id
    const question_id = this.props.match.params.question_id
    const board_id = this.props.match.params.board_id
    console.log(category_id, question_id, board_id)
      }

  submitQuestion = event => {
    this.setState({
      question_text: { value: event.target.value }
    });
  }

  submitAnswer = event => {
    this.setState({
      question_answer: { value: event.target.value }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newQuestion = {
      boards_id: this.props.match.params.board_id,
      question_text: this.state.question_text.value,
      question_answer: this.state.question_answer.value
    }
    console.log(newQuestion)

    fetch(`${config.API_ENDPOINT}/questions`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newQuestion),
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(response => 
        this.context.addQuestion(response),
        console.log(ApiContext))
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
    return (
      <section>
        <Link to={`/board/${this.props.match.params.board_id}`}><button type="button">
          BACK
        </button></Link>
        <form onSubmit={this.handleSubmit}>
          <div className="wrapper">
            <textarea value={this.state.question_text.value} onChange={event => this.updateQuestion(event.target.value)} placeholder="Your content here" required />
          </div>
          <div className="wrapper">
            <label htmlFor="question_answer"> What is </label>
            <input type="text" value={this.state.question_answer.value} onChange={event => this.updateAnswer(event.target.value)} placeholder="question_answer" required />
          </div>
          <div>
          <input type='hidden' name='boardId' defaultValue={this.props.match.params.board_id}></input>
          <input type='hidden' name='questionId' defaultValue={this.props.match.params.question_id}></input>
          <input type='hidden' name='categoryId' defaultValue={this.props.match.params.category_id}></input>
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