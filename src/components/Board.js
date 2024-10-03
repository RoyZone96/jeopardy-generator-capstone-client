import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import config from "../config";

const Board = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    questionId: "",
    questionCategory: "",
    board_title: "",
    category_one: "",
    category_two: "",
    category_three: "",
    category_four: "",
    category_five: "",
    category_six: "",
    existingBoardQuestions: [],
  });

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const resBoards = await axios.get(`${config.API_ENDPOINT}/boards/${id}`, {
          headers: {
            "content-type": "application/json",
          },
        });
  
        const resBoardsJson = resBoards.data;
  
        setState((prevState) => ({
          ...prevState,
          board_title: resBoardsJson.board_title,
          category_one: resBoardsJson.category_one,
          category_two: resBoardsJson.category_two,
          category_three: resBoardsJson.category_three,
          category_four: resBoardsJson.category_four,
          category_five: resBoardsJson.category_five,
          category_six: resBoardsJson.category_six,
        }));
  
        const resQuestions = await axios.get(`${config.API_ENDPOINT}/questions/board/${resBoardsJson.id}`, {
          headers: {
            "content-type": "application/json",
          },
        });
  
        const resQuestionsJson = resQuestions.data;
  
        setState((prevState) => ({
          ...prevState,
          existingBoardQuestions: resQuestionsJson,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchBoardData();
  }, [id]);

  const {
    category_one,
    category_two,
    category_three,
    category_four,
    category_five,
    category_six,
    existingBoardQuestions,
  } = state;
  const currentBoardId = id;
  const boardTitle = state.board_title;

  let questionsForBoardMap = "";
  if (existingBoardQuestions.length < 30) {
    let selectedStyleOutput = "";
    let linkUrlOutput100_1 = `/questions/1/0/${currentBoardId}/100`;
    let linkUrlOutput200_1 = `/questions/1/0/${currentBoardId}/200`;
    let linkUrlOutput300_1 = `/questions/1/0/${currentBoardId}/300`;
    let linkUrlOutput400_1 = `/questions/1/0/${currentBoardId}/400`;
    let linkUrlOutput500_1 = `/questions/1/0/${currentBoardId}/500`;

    let linkUrlOutput100_2 = `/questions/2/0/${currentBoardId}/100`;
    let linkUrlOutput200_2 = `/questions/2/0/${currentBoardId}/200`;
    let linkUrlOutput300_2 = `/questions/2/0/${currentBoardId}/300`;
    let linkUrlOutput400_2 = `/questions/2/0/${currentBoardId}/400`;
    let linkUrlOutput500_2 = `/questions/2/0/${currentBoardId}/500`;

    let linkUrlOutput100_3 = `/questions/3/0/${currentBoardId}/100`;
    let linkUrlOutput200_3 = `/questions/3/0/${currentBoardId}/200`;
    let linkUrlOutput300_3 = `/questions/3/0/${currentBoardId}/300`;
    let linkUrlOutput400_3 = `/questions/3/0/${currentBoardId}/400`;
    let linkUrlOutput500_3 = `/questions/3/0/${currentBoardId}/500`;

    let linkUrlOutput100_4 = `/questions/4/0/${currentBoardId}/100`;
    let linkUrlOutput200_4 = `/questions/4/0/${currentBoardId}/200`;
    let linkUrlOutput300_4 = `/questions/4/0/${currentBoardId}/300`;
    let linkUrlOutput400_4 = `/questions/4/0/${currentBoardId}/400`;
    let linkUrlOutput500_4 = `/questions/4/0/${currentBoardId}/500`;

    let linkUrlOutput100_5 = `/questions/5/0/${currentBoardId}/100`;
    let linkUrlOutput200_5 = `/questions/5/0/${currentBoardId}/200`;
    let linkUrlOutput300_5 = `/questions/5/0/${currentBoardId}/300`;
    let linkUrlOutput400_5 = `/questions/5/0/${currentBoardId}/400`;
    let linkUrlOutput500_5 = `/questions/5/0/${currentBoardId}/500`;

    let linkUrlOutput100_6 = `/questions/6/0/${currentBoardId}/100`;
    let linkUrlOutput200_6 = `/questions/6/0/${currentBoardId}/200`;
    let linkUrlOutput300_6 = `/questions/6/0/${currentBoardId}/300`;
    let linkUrlOutput400_6 = `/questions/6/0/${currentBoardId}/400`;
    let linkUrlOutput500_6 = `/questions/6/0/${currentBoardId}/500`;

    for (let i = 0; i < existingBoardQuestions.length; i++) {
      const question = existingBoardQuestions[i];
      const { question_category, question_points, id } = question;

      if (question_category === 1 && question_points === 100) {
        linkUrlOutput100_1 = `/questions/1/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 1 && question_points === 200) {
        linkUrlOutput200_1 = `/questions/1/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 1 && question_points === 300) {
        linkUrlOutput300_1 = `/questions/1/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 1 && question_points === 400) {
        linkUrlOutput400_1 = `/questions/1/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 1 && question_points === 500) {
        linkUrlOutput500_1 = `/questions/1/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 2 && question_points === 100) {
        linkUrlOutput100_2 = `/questions/2/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 2 && question_points === 200) {
        linkUrlOutput200_2 = `/questions/2/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 2 && question_points === 300) {
        linkUrlOutput300_2 = `/questions/2/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 2 && question_points === 400) {
        linkUrlOutput400_2 = `/questions/2/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 2 && question_points === 500) {
        linkUrlOutput500_2 = `/questions/2/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 3 && question_points === 100) {
        linkUrlOutput100_3 = `/questions/3/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 3 && question_points === 200) {
        linkUrlOutput200_3 = `/questions/3/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 3 && question_points === 300) {
        linkUrlOutput300_3 = `/questions/3/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 3 && question_points === 400) {
        linkUrlOutput400_3 = `/questions/3/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 3 && question_points === 500) {
        linkUrlOutput500_3 = `/questions/3/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 4 && question_points === 100) {
        linkUrlOutput100_4 = `/questions/4/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 4 && question_points === 200) {
        linkUrlOutput200_4 = `/questions/4/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 4 && question_points === 300) {
        linkUrlOutput300_4 = `/questions/4/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 4 && question_points === 400) {
        linkUrlOutput400_4 = `/questions/4/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 4 && question_points === 500) {
        linkUrlOutput500_4 = `/questions/4/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 5 && question_points === 100) {
        linkUrlOutput100_5 = `/questions/5/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 5 && question_points === 200) {
        linkUrlOutput200_5 = `/questions/5/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 5 && question_points === 300) {
        linkUrlOutput300_5 = `/questions/5/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 5 && question_points === 400) {
        linkUrlOutput400_5 = `/questions/5/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 5 && question_points === 500) {
        linkUrlOutput500_5 = `/questions/5/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 6 && question_points === 100) {
        linkUrlOutput100_6 = `/questions/6/${id}/${currentBoardId}/100`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 6 && question_points === 200) {
        linkUrlOutput200_6 = `/questions/6/${id}/${currentBoardId}/200`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 6 && question_points === 300) {
        linkUrlOutput300_6 = `/questions/6/${id}/${currentBoardId}/300`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 6 && question_points === 400) {
        linkUrlOutput400_6 = `/questions/6/${id}/${currentBoardId}/400`;
        selectedStyleOutput = "existingGame";
      }
      if (question_category === 6 && question_points === 500) {
        linkUrlOutput500_6 = `/questions/6/${id}/${currentBoardId}/500`;
        selectedStyleOutput = "existingGame";
      }
    }

    questionsForBoardMap = (
      <div className="divTableBody emptyTable">
        <div className="divTableRow">
          <div className="divTableCell ">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_1}>
              100
            </Link>
          </div>
          <div className="divTableCell">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_2}>
              100
            </Link>
          </div>
          <div className="divTableCell">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_3}>
              100
            </Link>
          </div>
          <div className="divTableCell">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_4}>
              100
            </Link>
          </div>
          <div className="divTableCell">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_5}>
              100
            </Link>
          </div>
          <div className="divTableCell">
            <Link className={selectedStyleOutput} to={linkUrlOutput100_6}>
              100
            </Link>
          </div>
        </div>
        <div className="divTableRow">
          <div className="divTableCell">
            <Link to={linkUrlOutput200_1}>200</Link>
          </div>
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
    );
  } else {
    questionsForBoardMap = existingBoardQuestions.map((question, key) => {
      let linkUrlOutput = `/questions/${question.question_category}/${question.id}/${question.board_id}/${question.question_points}`;
      let tableHtmlOutput = "";

      if ((key + 1) % 6) {
        tableHtmlOutput = (
          <div key={key} className="divTableCell">
            <Link to={linkUrlOutput}>{question.question_points}</Link>
          </div>
        );
      } else {
        tableHtmlOutput = (
          <div className="divTableCell lastCell">
            <Link to={linkUrlOutput}>{question.question_points}</Link>
          </div>
        );
      }

      return tableHtmlOutput;
    });

    return (
      <section>
        <div>
          <Link to="/myboards">
            <button type="button">Back</button>
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
                <div className="divTableRow">{questionsForBoardMap}</div>
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
    );
  }
};

export default Board;