import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommunitySortSelect from '../components/CommunitySortSelect';
import config from '../config';
import CommunityNav from '../components/CommunityNav';
import NavLinks from '../components/NavLinks';

const CommunityBoards = () => {
    const [communityBoards, setCommunityBoards] = useState([]);

    useEffect(() => {
        getAllCommunityBoards();
    }, []);

    const getAllCommunityBoards = async () => {
        try {
            const response = await axios.get(`${config.API_ENDPOINT}/communityBoards`);
            setCommunityBoards(response.data);
            console.log(response.data);
        } catch (error) {
            console.log({ error });
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const data = event.target.value;
        const filterLowerCased = data.toLowerCase();

        if (data === '') {
            getAllCommunityBoards();
        } else {
            const filteredBoards = communityBoards.filter(board =>
                board.board_title.toLowerCase().includes(filterLowerCased)
            );

            if (filteredBoards.length === 0) {
                setCommunityBoards([]);
            } else {
                console.log(filteredBoards);
                setCommunityBoards(filteredBoards);
            }
        }
    };

    let communityListHtml = <p>No Results</p>;

    if (communityBoards.length !== 0) {
        communityListHtml = communityBoards.map((communityBoard, key) => (
            <section key={key} className="community-list">
                <ul>
                    <li className="menu-select">
                        <div className="menu-wrapper">
                            <p className="title">{communityBoard.board_title}</p>
                            <CommunityNav id={communityBoard.id} />
                        </div>
                    </li>
                </ul>
            </section>
        ));
    }

    return (
        <div>
            <NavLinks />
            <div className="sort">
                <CommunitySortSelect />
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
            {communityListHtml}
        </div>
    );
};

export default CommunityBoards;