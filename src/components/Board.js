import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'


export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: "",
            questionCategory: "",
            board_title: "",
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
                    board_title: resBoardsJson.board_title,
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
        const boardTitle = this.props.match.params.board_title;
        const questionCategory = 1;
        const question_points = 100;
        const currentQuestions = this.state.existingBoardQuestions;

        console.log(currentQuestions)
        // console.log(currentBoardId)

        let questionsForBoardMap = ''
        //by default show there are no items
        if (currentQuestions.length < 30) {
            console.log('nothing here')

            let selectedStyleOutput = ""
            let linkUrlOutput100_1 = `/questions/1/0/${currentBoardId}/100`;
            let linkUrlOutput200_1 = `/questions/1/0/${currentBoardId}/200`
            let linkUrlOutput300_1 = `/questions/1/0/${currentBoardId}/300`
            let linkUrlOutput400_1 = `/questions/1/0/${currentBoardId}/400`
            let linkUrlOutput500_1 = `/questions/1/0/${currentBoardId}/500`

            let linkUrlOutput100_2 = `/questions/2/0/${currentBoardId}/100`;
            let linkUrlOutput200_2 = `/questions/2/0/${currentBoardId}/200`
            let linkUrlOutput300_2 = `/questions/2/0/${currentBoardId}/300`
            let linkUrlOutput400_2 = `/questions/2/0/${currentBoardId}/400`
            let linkUrlOutput500_2 = `/questions/2/0/${currentBoardId}/500`

            let linkUrlOutput100_3 = `/questions/3/0/${currentBoardId}/100`;
            let linkUrlOutput200_3 = `/questions/3/0/${currentBoardId}/200`
            let linkUrlOutput300_3 = `/questions/3/0/${currentBoardId}/300`
            let linkUrlOutput400_3 = `/questions/3/0/${currentBoardId}/400`
            let linkUrlOutput500_3 = `/questions/3/0/${currentBoardId}/500`

            let linkUrlOutput100_4 = `/questions/4/0/${currentBoardId}/100`;
            let linkUrlOutput200_4 = `/questions/4/0/${currentBoardId}/200`
            let linkUrlOutput300_4 = `/questions/4/0/${currentBoardId}/300`
            let linkUrlOutput400_4 = `/questions/4/0/${currentBoardId}/400`
            let linkUrlOutput500_4 = `/questions/4/0/${currentBoardId}/500`

            let linkUrlOutput100_5 = `/questions/5/0/${currentBoardId}/100`;
            let linkUrlOutput200_5 = `/questions/5/0/${currentBoardId}/200`
            let linkUrlOutput300_5 = `/questions/5/0/${currentBoardId}/300`
            let linkUrlOutput400_5 = `/questions/5/0/${currentBoardId}/400`
            let linkUrlOutput500_5 = `/questions/5/0/${currentBoardId}/500`

            let linkUrlOutput100_6 = `/questions/6/0/${currentBoardId}/100`;
            let linkUrlOutput200_6 = `/questions/6/0/${currentBoardId}/200`
            let linkUrlOutput300_6 = `/questions/6/0/${currentBoardId}/300`
            let linkUrlOutput400_6 = `/questions/6/0/${currentBoardId}/400`
            let linkUrlOutput500_6 = `/questions/6/0/${currentBoardId}/500`

            //       board_id: 18
            // id: 40
            // question_answer: "Ameterasu"
            // question_category: 1
            // question_points: 100
            // question_text: "This is the chief goddess of 
            // '/questions/:category_id/:question_id/:board_id'

            // for loop to current questions
            for (let i = 0; i < currentQuestions.length; i++) {
                // console.log(currentQuestions[i].id)
                // console.log(currentQuestions[i].board_id)
                // console.log(currentQuestions[i].question_category)
                // console.log(currentQuestions[i].question_points)
                // if currentQuestion category and points are matching url below display question else display 0
                if ((currentQuestions[i].question_category == 1) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_1 = `/questions/1/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 1) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_1 = `/questions/1/${currentQuestions[i].id}/${currentBoardId}/200`
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 1) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_1 = `/questions/1/${currentQuestions[i].id}/${currentBoardId}/300`
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 1) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_1 = `/questions/1/${currentQuestions[i].id}/${currentBoardId}/400`
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 1) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_1 = `/questions/1/${currentQuestions[i].id}/${currentBoardId}/500`
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 2) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_2 = `/questions/2/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 2) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_2 = `/questions/2/${currentQuestions[i].id}/${currentBoardId}/200`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 2) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_2 = `/questions/2/${currentQuestions[i].id}/${currentBoardId}/300`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 2) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_2 = `/questions/2/${currentQuestions[i].id}/${currentBoardId}/400`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 2) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_2 = `/questions/2/${currentQuestions[i].id}/${currentBoardId}/500`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 3) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_3 = `/questions/3/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 3) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_3 = `/questions/3/${currentQuestions[i].id}/${currentBoardId}/200`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 3) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_3 = `/questions/3/${currentQuestions[i].id}/${currentBoardId}/300`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 3) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_3 = `/questions/3/${currentQuestions[i].id}/${currentBoardId}/400`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 3) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_3 = `/questions/3/${currentQuestions[i].id}/${currentBoardId}/500`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 4) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_4 = `/questions/4/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 4) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_4 = `/questions/4/${currentQuestions[i].id}/${currentBoardId}/200`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 4) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_4 = `/questions/4/${currentQuestions[i].id}/${currentBoardId}/300`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 4) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_4 = `/questions/4/${currentQuestions[i].id}/${currentBoardId}/400`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 4) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_4 = `/questions/4/${currentQuestions[i].id}/${currentBoardId}/500`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 5) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_5 = `/questions/5/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 5) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_5 = `/questions/5/${currentQuestions[i].id}/${currentBoardId}/200`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 5) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_5 = `/questions/5/${currentQuestions[i].id}/${currentBoardId}/300`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 5) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_5 = `/questions/5/${currentQuestions[i].id}/${currentBoardId}/400`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 5) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_5 = `/questions/5/${currentQuestions[i].id}/${currentBoardId}/500`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 6) && (currentQuestions[i].question_points == 100)) {
                    linkUrlOutput100_6 = `/questions/6/${currentQuestions[i].id}/${currentBoardId}/100`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 6) && (currentQuestions[i].question_points == 200)) {
                    linkUrlOutput200_6 = `/questions/6/${currentQuestions[i].id}/${currentBoardId}/200`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 6) && (currentQuestions[i].question_points == 300)) {
                    linkUrlOutput300_6 = `/questions/6/${currentQuestions[i].id}/${currentBoardId}/300`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 6) && (currentQuestions[i].question_points == 400)) {
                    linkUrlOutput400_6 = `/questions/6/${currentQuestions[i].id}/${currentBoardId}/400`;
                    selectedStyleOutput = "existingGame"
                }
                if ((currentQuestions[i].question_category == 6) && (currentQuestions[i].question_points == 500)) {
                    linkUrlOutput500_6 = `/questions/6/${currentQuestions[i].id}/${currentBoardId}/500`;
                    selectedStyleOutput = "existingGame"
                }
            }
            questionsForBoardMap =
                <div className="divTableBody emptyTable">
                    <div className="divTableRow">
                        <div className="divTableCell ">
                            {/* <Link to="/questions/100/1">100</Link> */}
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_1}>100</Link>
                        </div>
                        <div className="divTableCell">
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_2}>100</Link>
                        </div>
                        <div className="divTableCell">
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_3}>100</Link>
                        </div>
                        <div className="divTableCell">
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_4}>100</Link>
                        </div>
                        <div className="divTableCell">
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_5}>100</Link>
                        </div>
                        <div className="divTableCell">
                            <Link className={selectedStyleOutput} to={linkUrlOutput100_6}>100</Link>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_1}>200</Link
                            ></div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_2}>200</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_3}>200</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_4}>200</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_5}>200</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput200_6}>200</Link>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_1}>300</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_2}>300</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_3}>300</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_4}>300</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_5}>300</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput300_6}>300</Link>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_1}>400</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_2}>400</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_3}>400</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_4}>400</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_5}>400</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput400_6}>400</Link>
                        </div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_1}>500</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_2}>500</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_3}>500</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_4}>500</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_5}>500</Link>
                        </div>
                        <div className="divTableCell">
                            <Link to={linkUrlOutput500_6}>500</Link>
                        </div>
                    </div>
                </div>
        }
        // if there are items 
        else {
            // display details for each one of the items
            questionsForBoardMap = currentQuestions.map((question, key) => {

                let linkUrlOutput = `/questions/${question.question_category}/${question.id}/${question.board_id}/${question.question_points}`;

                let tableHtmlOutput = ''
                // if this is the last cell break the row on the next cell
                if ((key + 1) % 6) {
                    tableHtmlOutput =
                        <div key={key} className="divTableCell">
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
            <section>
                <div>
                    <Link to="/myboards">
                        <button type="button">
                            Back
          </button>
                    </Link>
                </div>
                <div>
                    <h2>{boardTitle}</h2>
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
                {/* <div className="button-wrapper">
                    <button type="button" className="submit" onClick={this.handleClickSubmit}>
                        Submit
          </button>
                </div> */}

            </section>
        )
    }
}

