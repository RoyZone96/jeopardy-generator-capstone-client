import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';
import TokenService from '../services/TokenService';

const SortSelect = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [boards, setBoards] = useState([]);

  const fetchBoards = async (url) => {
    try {
      const user_id = TokenService.getUserId();
      console.log(user_id);

      const response = await axios.get(url);
      const boards = response.data;

      console.log(boards);
      console.log(user_id);

      const filteredBoards = boards.filter(board => board.user_id === user_id);
      setBoards(filteredBoards);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleToggleDefault = () => {
    setIsSorted(false);
    window.location = '/myboards';
    const boardUrl = `${config.API_ENDPOINT}/boards`;
    fetchBoards(boardUrl);
  };

  const handleToggleNames = () => {
    setIsSorted(true);
    window.location = '/myboards';
    const boardUrl = `${config.API_ENDPOINT}/boards/sort-by/names`;
    fetchBoards(boardUrl);
  };

  const handleToggleDates = () => {
    setIsSorted(true);
    window.location = '/myboards';
    const boardUrl = `${config.API_ENDPOINT}/boards/sort-by/dates`;
    fetchBoards(boardUrl);
  };

  const handleTogglePopular = () => {
    setIsSorted(true);
    window.location = '/myboards';
    const boardUrl = `${config.API_ENDPOINT}/boards/sort-by/popular`;
    fetchBoards(boardUrl);
  };

  return (
    <div className="sorter clearfix">
      <select name="sorting" id="sort-bar" onChange={(e) => {
        switch (e.target.value) {
          case 'default':
            handleToggleDefault();
            break;
          case 'name':
            handleToggleNames();
            break;
          case 'recent':
            handleToggleDates();
            break;
          case 'popular':
            handleTogglePopular();
            break;
          default:
            break;
        }
      }}>
        <option value="default">Sort</option>
        <option value="name">Alphabetical</option>
        <option value="recent">Recent</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default SortSelect;