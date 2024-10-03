import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import axios from "axios";
import config from "../config";
import ApiContext from "../utils/ApiContext";

const BoardNav = (props) => {
  const [boardTitle, setBoardTitle] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [boardId, setBoardId] = useState(0);
  const [dayPosted, setDayPosted] = useState("");
  const context = useContext(ApiContext);

  useEffect(() => {
    const url = `${config.API_ENDPOINT}/communityBoards/${props.id}`;
    axios
      .get(url)
      .then((response) => {
        const { id, board_title, likes, day_posted } = response.data;
        setBoardId(id);
        setBoardTitle(board_title);
        setLikes(likes);
        setDayPosted(day_posted);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [props.id]);

  const toggleLike = (event) => {
    event.preventDefault();
    const existingLikes = likes + 1;

    const updateLikes = {
      likes: existingLikes,
    };

    axios
      .patch(
        `${config.API_ENDPOINT}/communityBoards/${props.id}`,
        updateLikes,
        {
          headers: { "content-type": "application/json" },
        }
      )
      .then((response) => {
        window.location = "/community";
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="boardNav">
      <h2>{dayPosted && format(parseISO(dayPosted), "MMM d, yyyy")}</h2>
      <div className="button-spacer">
        <Link to={`/communityPlay/${props.id}`}>
          <button type="button"> PLAY </button>
        </Link>
      </div>
      <div className="button-spacer">
        <button onClick={toggleLike}> LIKE: {likes}</button>
      </div>
    </div>
  );
};

BoardNav.defaultProps = {
  onDeleteBoard: () => {},
  match: {
    params: {},
  },
};

export default BoardNav;
