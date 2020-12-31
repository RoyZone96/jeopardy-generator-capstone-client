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
        console.log(this.state)
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
    const question_points = 100;
    const currentQuestions = this.state.existingBoardQuestions;

    console.log(currentQuestions)
    // console.log(currentBoardId)

    let questionsForBoardMap = ''
    //by default show there are no items
    if (currentQuestions.length === 0) {
      let linkUrlOutput = `/questions/${questionCategory}/1/${currentBoardId}/${question_points}`;
      questionsForBoardMap =
        <div className="divTableBody">
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
              <Link to={linkUrlOutput}>200</Link
              ></div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>200</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>200</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>200</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>200</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>200</Link>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>300</Link>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>400</Link>
            </div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
            <div className="divTableCell">
              <Link to={linkUrlOutput}>500</Link>
            </div>
          </div>
        </div>
    }
    // if there are items 
    else {
      // display details for each one of the items
      questionsForBoardMap = currentQuestions.map((question, key) => {
        // console.log(question)
        let linkUrlOutput = `/questions/${question.question_category}/${question.id}/${question.board_id}/${question.question_points}`;
        // let tableHtmlOutput = <div className="divTableRow">
        //   <div className="divTableCell">
        //     {/* <Link to="/questions/100/1">100</Link> */}
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        //   <div className="divTableCell">
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        //   <div className="divTableCell">
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        //   <div className="divTableCell">
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        //   <div className="divTableCell">
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        //   <div className="divTableCell">
        //     <Link to={linkUrlOutput}>{question.question_points}</Link>
        //   </div>
        // </div>

        // If the points equal 100 output 100 row 
        

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
      <main>
        <div>
          <Link to="/myboards"><button type="button">
            Back
          </button></Link>
        </div>
        <section> 
          <div className="tableWrapper">
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell divTableHead">
                    <h3>{category_one}</h3>
                  </div>
                  <div className="divTableCell divTableHead">
                    <h3>{category_two}</h3>
                  </div>
                  <div className="divTableCell divTableHead">
                    <h3>{category_three}</h3>
                  </div>
                  <div className="divTableCell divTableHead">
                    <h3>{category_four}</h3>
                  </div>
                  <div className="divTableCell divTableHead">
                    <h3>{category_five}</h3>
                  </div>
                  <div className="divTableCell divTableHead">
                    <h3>{category_six}</h3>
                  </div>
                </div>
                <div className="divTableRow">
                  {questionsForBoardMap}
                </div>
              </div>
            </div>
          </div>
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

