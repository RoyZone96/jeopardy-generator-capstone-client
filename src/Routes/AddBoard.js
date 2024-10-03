import React, { useState, useContext } from "react";
import axios from "axios";
import config from "../config";
import ApiContext from "../utils/ApiContext";
import ValidationError from "../utils/ValidationError";
import TokenService from "../services/TokenService";

const AddBoard = (props) => {
  const [title, setTitle] = useState({ value: "", touched: false });
  const [categoryOne, setCategoryOne] = useState({ value: "", touched: false });
  const [categoryTwo, setCategoryTwo] = useState({ value: "", touched: false });
  const [categoryThree, setCategoryThree] = useState({
    value: "",
    touched: false,
  });
  const [categoryFour, setCategoryFour] = useState({
    value: "",
    touched: false,
  });
  const [categoryFive, setCategoryFive] = useState({
    value: "",
    touched: false,
  });
  const [categorySix, setCategorySix] = useState({ value: "", touched: false });

  const context = useContext(ApiContext);

  const handleBoardCreate = async (event) => {
    event.preventDefault();

    const newBoard = {
      user_id: TokenService.getUserId(),
      board_title: title.value,
      times_played: 0,
      category_one: categoryOne.value,
      category_two: categoryTwo.value,
      category_three: categoryThree.value,
      category_four: categoryFour.value,
      category_five: categoryFive.value,
      category_six: categorySix.value,
    };

    try {
      const response = await axios.post(
        `${config.API_ENDPOINT}/boards`,
        newBoard,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      context.addBoard(response.data);
      props.history.push("/myBoards");
    } catch (error) {
      console.error(error);
    }
  };

  const validateBoardTitle = () => {
    const trimmedTitle = title.value.trim();
    if (trimmedTitle.length === 0) {
      return "Title is required";
    }
  };

  return (
    <div>
      <div className="add-wrapper">
        <form onSubmit={handleBoardCreate}>
          <div className="title-box">
            <label htmlFor="board-title">Board title</label>
            <input
              id="board-title"
              type="text"
              title="board-title"
              onChange={(event) =>
                setTitle({ value: event.target.value, touched: true })
              }
            />
          </div>
          <div className="category-box">
            <ul>
              <li>
                <label htmlFor="category-title">Category title 1</label>
                <input
                  id="category-title"
                  type="text"
                  title="category-title"
                  onChange={(event) =>
                    setCategoryOne({ value: event.target.value, touched: true })
                  }
                />
              </li>
              <li>
                <label htmlFor="categories-title">Category title 2</label>
                <input
                  id="categories-title"
                  type="text"
                  title="categories-title"
                  onChange={(event) =>
                    setCategoryTwo({ value: event.target.value, touched: true })
                  }
                />
              </li>
              <li>
                <label htmlFor="categories-title">Category title 3</label>
                <input
                  id="categories-title"
                  type="text"
                  title="categories-title"
                  onChange={(event) =>
                    setCategoryThree({
                      value: event.target.value,
                      touched: true,
                    })
                  }
                />
              </li>
              <li>
                <label htmlFor="categories-title">Category title 4</label>
                <input
                  id="categories-title"
                  type="text"
                  title="categories-title"
                  onChange={(event) =>
                    setCategoryFour({
                      value: event.target.value,
                      touched: true,
                    })
                  }
                />
              </li>
              <li>
                <label htmlFor="categories-title">Category title 5</label>
                <input
                  id="categories-title"
                  type="text"
                  title="categories-title"
                  onChange={(event) =>
                    setCategoryFive({
                      value: event.target.value,
                      touched: true,
                    })
                  }
                />
              </li>
              <li>
                <label htmlFor="categories-title">Category title 6</label>
                <input
                  id="categories-title"
                  type="text"
                  title="categories-title"
                  onChange={(event) =>
                    setCategorySix({ value: event.target.value, touched: true })
                  }
                />
              </li>
            </ul>
          </div>
          {title.touched && <ValidationError message={validateBoardTitle()} />}
          <button
            className="post-button"
            type="submit"
            disabled={validateBoardTitle()}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBoard;
