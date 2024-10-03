import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import axios from "axios";
import config from "../config";
import ApiContext from "../utils/ApiContext";

const BoardNav = (props) => {
  const [board, setBoard] = useState({
    board_title: "",
    category_five: "",
    category_four: "",
    category_one: "",
    category_six: "",
    category_three: "",
    category_two: "",
    date_created: "",
    date_updated: "",
    id: 0,
    times_played: 0,
    user_id: 0,
  });

  const context = useContext(ApiContext);
  const history = useHistory();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get(
          `${config.API_ENDPOINT}/boards/${props.id}`
        );
        setBoard(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoard();
  }, [props.id]);

  const handlePost = async (e) => {
    e.preventDefault();
    const sharedBoard = {
      ...board,
      likes: 0,
    };

    try {
      const response = await axios.post(
        `${config.API_ENDPOINT}/communityBoards`,
        sharedBoard,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      context.shareBoard(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClickDelete = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`${config.API_ENDPOINT}/boards/${props.id}`, {
        headers: { "Content-Type": "application/json" },
      });
      context.deleteBoard(props.id);
      props.onDeleteBoard(props.id);
      history.push("/myBoards");

      await axios.delete(`${config.API_ENDPOINT}/communityBoards/${props.id}`, {
        headers: { "Content-Type": "application/json" },
      });
      context.deleteBoard(props.id);
      props.onDeleteBoard(props.id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="boardNav">
      <div className="button-spacer">
        <Link to={`/board/${props.id}`}>
          <button type="button"> EDIT </button>
        </Link>
      </div>
      <div className="button-spacer">
        <Link to={`/play/${props.id}`}>
          <button type="button"> PLAY </button>
        </Link>
      </div>
      <div className="button-spacer">
        <button type="submit" onClick={handlePost}>
          {" "}
          SHARE{" "}
        </button>
      </div>
      <div className="button-spacer">
        <button type="button" onClick={handleClickDelete}>
          {" "}
          DELETE{" "}
        </button>
      </div>
    </div>
  );
};

BoardNav.defaultProps = {
  onDeleteBoard: () => {},
  match: {
    params: {},
  },
  onShareBoard: () => {},
  match: {
    params: {},
  },
};

export default BoardNav;
