import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import config from "../config";
import ApiContext from "../utils/ApiContext";

const QuestionForm = () => {
  const { category_id, question_id, board_id } = useParams();
  const history = useHistory();
  const context = useContext(ApiContext);

  const [currentQuestions, setCurrentQuestions] = useState({});
  const [questionText, setQuestionText] = useState({
    value: "",
    touched: false,
  });
  const [questionAnswer, setQuestionAnswer] = useState({
    value: "",
    touched: false,
  });
  const [categoryId, setCategoryId] = useState(0);
  const [questionPoints, setQuestionPoints] = useState(0);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `${config.API_ENDPOINT}/questions/${question_id}`
        );
        setCurrentQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, [question_id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newQuestion = {
      board_id,
      question_text: questionText.value,
      question_answer: questionAnswer.value,
      question_points: questionPoints,
      question_category: category_id,
    };

    try {
      if (question_id == 0) {
        const response = await axios.post(
          `${config.API_ENDPOINT}/questions`,
          newQuestion,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        context.addQuestion(response.data);
      } else {
        const response = await axios.patch(
          `${config.API_ENDPOINT}/questions/${question_id}`,
          newQuestion,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        context.addQuestion(response.data);
      }
      history.push(`/board/${board_id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updatePoints = (event) => {
    setQuestionPoints(event.target.value);
  };

  const updateCategoryId = (event) => {
    setCategoryId(event.target.value);
  };

  const updateQuestion = (value) => {
    setQuestionText({ value, touched: true });
  };

  const updateAnswer = (value) => {
    setQuestionAnswer({ value, touched: true });
  };

  let currentQuestionsHtml = (
    <textarea
      className="question-area"
      defaultValue={questionText.value}
      onChange={(event) => updateQuestion(event.target.value)}
      placeholder="Your content here"
      required
    />
  );

  if (Object.keys(currentQuestions).length !== 0) {
    currentQuestionsHtml = (
      <textarea
        className="question-area"
        defaultValue={currentQuestions.question_text}
        onChange={(event) => updateQuestion(event.target.value)}
        placeholder="Your content here"
        required
      />
    );
  }

  let currentAnswersHtml = (
    <input
      type="text"
      defaultValue={questionAnswer.value}
      name="question_answers"
      onChange={(event) => updateAnswer(event.target.value)}
      placeholder="question_answer"
      required
    />
  );

  if (Object.keys(currentQuestions).length !== 0) {
    currentAnswersHtml = (
      <input
        type="text"
        defaultValue={currentQuestions.question_answer}
        name="question_answers"
        onChange={(event) => updateAnswer(event.target.value)}
        placeholder="question_answer"
        required
      />
    );
  }

  let categorySelectOutput = (
    <select onChange={updateCategoryId}>
      <option value=""></option>
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <option key={id} value={id} selected={category_id == id}>
          {id}
        </option>
      ))}
    </select>
  );

  let pointSelectOutput = (
    <select onChange={updatePoints}>
      <option value=""></option>
      {[100, 200, 300, 400, 500].map((points) => (
        <option key={points} value={points} selected={questionPoints == points}>
          {points}
        </option>
      ))}
    </select>
  );

  return (
    <section>
      <Link to={`/board/${board_id}`}>
        <button type="button">BACK</button>
      </Link>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="selector">
            <label htmlFor="select">Category</label>
            {categorySelectOutput}
            <label htmlFor="select">Points</label>
            {pointSelectOutput}
          </div>
          <div className="question-container">{currentQuestionsHtml}</div>
          <div className="answer-container">
            <label htmlFor="question_answer"> What is </label>
            {currentAnswersHtml}
          </div>
          <div>
            <input type="hidden" name="boardId" defaultValue={board_id}></input>
            <input
              type="hidden"
              name="questionId"
              defaultValue={question_id}
            ></input>
            <input
              type="hidden"
              name="categoryId"
              defaultValue={category_id}
            ></input>
            <input
              type="hidden"
              name="points"
              defaultValue={questionPoints}
            ></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;
