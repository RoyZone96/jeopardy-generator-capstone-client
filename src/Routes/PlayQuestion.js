import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import config from '../config';

const PlayQuestion = () => {
  const [isShown, setIsShown] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [questionAnswer, setQuestionAnswer] = useState("");
  const { question_id, board_id } = useParams();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const url = `${config.API_ENDPOINT}/questions/${question_id}`;
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setQuestionText(response.data.question_text);
        setQuestionAnswer(response.data.question_answer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, [question_id]);

  const toggleState = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="wrapper">
      <Link to={`/play/${board_id}`}>
        <button type="button">BACK</button>
      </Link>
      <div>
        <div className="question-container">
          <p>{questionText}</p>
        </div>
        <div className="answer-container">
          <span>What is {isShown && (<span className="answer">{questionAnswer}</span>)} ?</span>
        </div>
        <div>
          <button type="button" className="reveal" onClick={toggleState}>
            Reveal
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayQuestion;