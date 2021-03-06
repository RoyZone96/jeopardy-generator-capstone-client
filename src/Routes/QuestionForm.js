import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'



export default class QuestionForm extends Component {

  static contextType = ApiContext;


  constructor(props) {
    super(props);
    this.state = {
      currentQuestions: {},
      currentAnswers: {},
      question_text: {
        value: '',
        touched: false
      },
      question_answer: {
        value: '',
        touched: false
      },
      category_id: 0,
      question_points: 0
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    const category_id = this.props.match.params.category_id
    const question_id = this.props.match.params.question_id
    const board_id = this.props.match.params.board_id
    console.log(category_id, question_id, board_id)
    let url = `${config.API_ENDPOINT}/questions/${question_id}`
    // let url = `${config.API_ENDPOINT}/questions/11`

    console.log(url)
    fetch(url)
      .then((questionsRes) => {
        if (!questionsRes.ok)
          return questionsRes.json().then(e => Promise.reject(e));
        return Promise.all([questionsRes.json()]);
      })
      .then((questions) => {
        console.log(questions)
        this.setState({ currentQuestions: questions[0] });
        console.log(this.state)
      })
      .catch(error => {
        console.log({ error });
      });
  }



  submitQuestion = event => {
    event.preventDefault()
    this.setState({
      question_text: { value: event.target.value }
    });
  }

  submitAnswer = event => {
    event.preventDefault()
    this.setState({
      question_answer: { value: event.target.value }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const category_id = this.props.match.params.category_id
    const question_id = this.props.match.params.question_id
    console.log(question_id, "id is here")
    const board_id = this.props.match.params.board_id

    const newQuestion = {
      board_id: board_id,
      question_text: this.state.question_text.value,
      question_answer: this.state.question_answer.value,
      question_points: this.state.question_points,
      question_category: category_id
    }

    console.log(this.state.question_points)

    const updatedQuestion = {
      board_id: board_id,
      question_text: this.state.question_text.value,
      question_answer: this.state.question_answer.value,
      question_points: this.state.question_points,
      question_category: category_id
    }


    console.log(Object.keys(this.state.currentQuestions).length)

    // if question is created do this
    if (question_id == 0) {
      console.log(newQuestion)
      console.log("created")
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
        .then(response => {
          this.context.addQuestion(response)
          console.log(ApiContext)
          console.log(newQuestion)
          this.props.history.push(`/board/${board_id}`)
        })
        .catch(error => {
          console.log(error.message)
        })
    }

    // if question is updated do this
    else {
      console.log(updatedQuestion)
      console.log("updated")
      fetch(`${config.API_ENDPOINT}/questions/${question_id}`,
        {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(updatedQuestion),
        })
        .then(res => {
          if (!res.ok)
            return res.json().then(e => Promise.reject(e))
          return res.json()
        })
        .then(response => {
          this.context.addQuestion(response)
          console.log(ApiContext)
          console.log(updatedQuestion)
          this.props.history.push(`/board/${board_id}`)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }


  updatePoints = (event) => {
    console.log(event.target.value)
    this.setState({
      question_points: event.target.value
    })
  }

  updateCategoryId = (event) => {
    console.log(event.target.value)
    this.setState({
      category_id: event.target.value
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
    console.log(this.state.question_text.value)
    //If the question wasn't editted display default in textarea.
    let currentQuestionsHtml = <textarea className="question-area" defaultValue={this.state.question_text.value} onChange={event => this.updateQuestion(event.target.value)} placeholder="Your content here" required />

    //If the question was edited before display the last text for it in text area
    if (Object.keys(this.state.currentQuestions).length != 0) {
      // console.log(this.state.currentQuestions.question_text)
      currentQuestionsHtml = <textarea className="question-area" defaultValue={this.state.currentQuestions.question_text} onChange={event => this.updateQuestion(event.target.value)} placeholder="Your content here" required />
    }
    //if the answer wasn't editted display default in input area
    let currentAnswersHtml = <input type="text" defaultValue={this.state.question_answer.value} name="question_answers" onChange={event => this.updateAnswer(event.target.value)} placeholder="question_answer" required />

    //if answer was edited display the last text for it in input
    // console.log((this.state.currentQuestions))
    if (Object.keys(this.state.currentQuestions).length != 0) {
      currentAnswersHtml = <input type="text" defaultValue={this.state.currentQuestions.question_answer} name="question_answers" onChange={event => this.updateAnswer(event.target.value)} placeholder="question_answer" required />
    }



    //toDo: dynamically enter question points make sure patch payload is populated with all variables
    //if the answer wasn't editted display default in input area
    
    //if answer was edited display the last text for it in input
   
    let renderCategoryId = this.props.match.params.category_id;
    let categorySelectOutput =
      <select onChange={(event) => this.updateCategoryId(event)}>
        <option value=""></option>
        {renderCategoryId == 1 ? <option value="1" selected>1</option> : <option value="1">1</option>}
        {renderCategoryId == 2 ? <option value="2" selected>2</option> : <option value="2">2</option>}
        {renderCategoryId == 3 ? <option value="3" selected>3</option> : <option value="3">3</option>}
        {renderCategoryId == 2 ? <option value="4" selected>4</option> : <option value="4">4</option>}
        {renderCategoryId == 2 ? <option value="5" selected>5</option> : <option value="5">5</option>}
        {renderCategoryId == 2 ? <option value="6" selected>6</option> : <option value="6">6</option>}
      </select>
    let renderPointValue = this.state.question_points
    let pointSelectOutput = <select onChange={(event) => this.updatePoints(event)}>
      <option value=""></option>
      {renderPointValue == 100 ? <option value="100" selected>100</option> : <option value="100">100</option>}
      {renderPointValue == 200 ? <option value="200" selected>200</option> : <option value="200">200</option>}
      {renderPointValue == 300 ? <option value="300" selected>300</option> : <option value="300">300</option>}
      {renderPointValue == 400 ? <option value="400" selected>400</option> : <option value="400">400</option>}
      {renderPointValue == 500 ? <option value="500" selected>500</option> : <option value="500">500</option>}
    </select>

    return (
      <section>
        <Link to={`/board/${this.props.match.params.board_id}`}>
          <button type="button">BACK</button>
        </Link>
        <div className="wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="selector">
              <label for="select">Category</label>
              {categorySelectOutput}
              <label for="select">Points</label>
              {pointSelectOutput}
            </div>
            <div className="question-container">
              {currentQuestionsHtml}
            </div>
            <div className="answer-container">
              <label htmlFor="question_answer"> What is </label>
              {currentAnswersHtml}
            </div>
            <div>
              <input type='hidden' name='boardId' defaultValue={this.props.match.params.board_id}></input>
              <input type='hidden' name='questionId' defaultValue={this.props.match.params.question_id}></input>
              <input type='hidden' name='categoryId' defaultValue={this.props.match.params.category_id}></input>
              <input type='hidden' name='points' defaultValue={this.props.match.params.question_points}></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section >
    )
  }
}
