import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavLinks from "../components/NavLinks";
import Welcome from "../components/Welcome";
import BoardNav from "../components/BoardNav";
import config from "../config";
import ApiContext from "../utils/ApiContext";
import TokenService from "../services/TokenService";
import BoardsApiService from "../services/BoardsApiService";
import "bootstrap/dist/css/bootstrap.min.css";

const MyBoards = () => {
  const [boards, setBoards] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const apiContext = useContext(ApiContext);

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllBoards = async () => {
    const user_id = TokenService.getUserId();
    try {
      const response = await axios.get(`${config.API_ENDPOINT}/boards`);
      const filteredBoards = response.data.filter(
        (board) => board.user_id === user_id
      );
      setBoards(filteredBoards);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const data = event.target.value.toLowerCase();
    if (data === "") {
      getAllBoards();
    } else {
      const filteredBoards = boards.filter((board) =>
        board.board_title.toLowerCase().includes(data)
      );
      setBoards(filteredBoards);
    }
  };

  const handleAddBoard = (board) => {
    setBoards([...boards, board]);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const sharedBoard = {
      board_title: e.target.board_title.value,
      user_id: TokenService.getUserId(),
      board_id: BoardsApiService.getBoardsById(),
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
      apiContext.shareBoard(response.data);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleToggleDefault = async () => {
    window.location = "/myboards";
    getAllBoards();
  };

  const handleToggleNames = async () => {
    setIsSorted(true);
    window.location = "/myboards";
    const user_id = TokenService.getUserId();
    try {
      const response = await axios.get(
        `${config.API_ENDPOINT}/boards/sort-by/names`
      );
      const filteredBoards = response.data.filter(
        (board) => board.user_id === user_id
      );
      setBoards(filteredBoards);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleDates = async () => {
    setIsSorted(true);
    window.location = "/myboards";
    const user_id = TokenService.getUserId();
    try {
      const response = await axios.get(
        `${config.API_ENDPOINT}/boards/sort-by/dates`
      );
      const filteredBoards = response.data.filter(
        (board) => board.user_id === user_id
      );
      setBoards(filteredBoards);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = boards.slice(indexOfFirstItem, indexOfLastItem);

  const boardsOutput = currentItems.map((board) => (
    <ul key={board.id}>
      <li className="menu-select">
        <div className="menu-wrapper">
          <div>
            <p className="title">{board.board_title}</p>
            <BoardNav id={board.id} />
          </div>
        </div>
      </li>
    </ul>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(boards.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Welcome />
      <NavLinks />
      <div className="sort">
        <select
          name="sorting"
          id="sort-bar"
          onChange={(e) => {
            if (e.target.value === "default") handleToggleDefault();
            if (e.target.value === "name") handleToggleNames();
            if (e.target.value === "recent") handleToggleDates();
          }}
        >
          <option value="default">Default</option>
          <option value="name">Alphabetical</option>
          <option value="recent">Recent</option>
        </select>
        <form>
          <input
            type="text"
            className="search_bar"
            name="filter"
            placeholder="Input Here..."
            onChange={handleSearch}
          />
        </form>
      </div>
      <section className="new-wrapper">
        <Link to="/newboard">
          <button className="new-board" type="button">
            NEW BOARD +
          </button>
        </Link>
      </section>
      <section className="board-list">{boardsOutput}</section>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <a
                onClick={() => handlePageChange(number)}
                className="page-link"
                href="#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MyBoards;
