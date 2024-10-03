import React, { useState } from 'react';
import axios from 'axios';
import TokenService from './TokenService'; // Ensure this is the correct path to TokenService
import config from './config'; // Ensure this is the correct path to config

const SortSelect = () => {
    const [isSorted, setIsSorted] = useState(false);
    const [boards, setBoards] = useState([]);

    const fetchBoards = async (url) => {
        try {
            const response = await axios.get(url);
            const user_id = TokenService.getUserId();
            const filteredBoards = response.data.filter(board => board.user_id === user_id);
            setBoards(filteredBoards);
        } catch (error) {
            console.error(error);
        }
    };

    const handleToggleDefault = () => {
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

    return (
        <div className="sorter clearfix">
            <select name="sorting" id="sort-bar" onChange={(e) => {
                if (e.target.value === 'default') handleToggleDefault();
                if (e.target.value === 'name') handleToggleNames();
                if (e.target.value === 'recent') handleToggleDates();
            }}>
                <option value="default">Default</option>
                <option value="name">Alphabetical</option>
                <option value="recent">Recent</option>
            </select>
        </div>
    );
};

export default SortSelect;