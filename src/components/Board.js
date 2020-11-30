import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionId: "",
      questionCategory: "",
      category_one: "",
      category_two: "",
      category_three: "",
      category_four: "",
      category_five: "",
      category_six: "",
      existingBoardQuestions: []
    }
  }


  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/boards/${this.props.match.params.id}`, {
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
    const { category_one, category_two, category_three, category_four, category_five, category_six } = this.state;
    const currentBoardId = this.props.match.params.id;
    const questionCategory = 1;
    const questionId = 1;
    const currentQuestions = this.state.existingBoardQuestions.map
    console.log(currentBoardId)
    let linkUrlOutput = `/questions/${questionCategory}/${questionId}/${currentBoardId}`
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
          <div className="divTableCell">
            <Link to={linkUrlOutput}>100</Link>
          </div>
          <div className="divTableCell">
            <Link to={linkUrlOutput}>100</Link>
          </div>
          <div className="divTableCell">
            <Link to={linkUrlOutput}>100</Link>
          </div>
          <div className="divTableCell">
            <Link to={linkUrlOutput}>100</Link>
          </div>
          <div className="divTableCell">
            <Link to={linkUrlOutput}>100</Link>
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <Link to="/questions/200/1">200</Link
            ></div>
          <div className="divTableCell">
            <Link to="/questions/200/2">200</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/200/3">200</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/200/4">200</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/200/5">200</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/200/6">200</Link>
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <Link to="/questions/300/1">300</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/300/2">300</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/300/3">300</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/300/4">300</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/300/5">300</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/300/6">300</Link>
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <Link to="/questions/400/1">400</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/400/2">400</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/400/3">400</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/400/4">400</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/400/5">400</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/400/6">400</Link>
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <Link to="/questions/500/1">500</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/500/2">500</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/500/3">500</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/500/4">500</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/500/5">500</Link>
          </div>
          <div className="divTableCell">
            <Link to="/questions/500/6">500</Link>
          </div>
        </div>
      </div>
    </div>

    return (
      <main>
        <div>
          <Link to="/myboards"><button type="button">
            Back
          </button></Link>
        </div>
        <section>
          {tableHtmlOutput}
        </section>
        <div>
          <button type="button" onClick={this.handleClickSubmit}>
            Submit
          </button>
        </div>

      </main>
    )
  }
}

