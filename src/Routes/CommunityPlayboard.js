import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const CommunityPlayboard = () => {
    const [players, setPlayers] = useState([]);
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);
    const [categories, setCategories] = useState({
        category_one: "",
        category_two: "",
        category_three: "",
        category_four: "",
        category_five: "",
        category_six: ""
    });
    const [existingBoardQuestions, setExistingBoardQuestions] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchBoardData = async () => {
            try {
                const boardResponse = await axios.get(`${config.API_ENDPOINT}/communityBoards/${id}`);
                const boardData = boardResponse.data;
                setCategories({
                    category_one: boardData.category_one,
                    category_two: boardData.category_two,
                    category_three: boardData.category_three,
                    category_four: boardData.category_four,
                    category_five: boardData.category_five,
                    category_six: boardData.category_six
                });

                const questionsResponse = await axios.get(`${config.API_ENDPOINT}/questions/board/${boardData.id}`);
                setExistingBoardQuestions(questionsResponse.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBoardData();
    }, [id]);

    const addPlayer = (event) => {
        event.preventDefault();
        setPlayers([...players, { name, score }]);
        setName('');
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const updateScore = (e, idx) => {
        const newScore = Number(e.target.value);
        setPlayers(players.map((player, index) => (index === idx ? { ...player, score: player.score + newScore } : player)));
    };

    const displayScore = (idx) => (
        <select onChange={(e) => updateScore(e, idx)}>
            <option value=""></option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
        </select>
    );

    const { category_one, category_two, category_three, category_four, category_five, category_six } = categories;

    let playersList = players.map((player, idx) => (
        <div key={idx}>
            <p style={{ display: 'inline-block', margin: '2px 10px' }}>{player.name} - score: {player.score}</p>
            {displayScore(idx)}
        </div>
    ));

    let questionsForBoardMap = '';
    if (existingBoardQuestions.length === 0) {
        questionsForBoardMap = <p>No items here</p>;
    } else {
        questionsForBoardMap = existingBoardQuestions.map((question, key) => {
            let linkUrlOutput = `/playquestion/${question.question_category}/${question.id}/${question.board_id}/${question.question_points}`;
            return (
                <div key={key} className={`divTableCell ${((key + 1) % 6 === 0) ? 'lastCell' : ''}`}>
                    <Link to={linkUrlOutput}>{question.question_points}</Link>
                </div>
            );
        });
    }

    return (
        <section>
            <div>
                <Link to="/myboards">
                    <button type="button"> Back </button>
                </Link>
                <section className="scoreboard">
                    <form onSubmit={addPlayer} className="add">
                        <input type="text" value={name} onChange={handleChange} placeholder="name" required />
                        <button type="submit">Add player</button>
                    </form>
                    <div className="players">
                        <div className="player">
                            {playersList}
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div className="tableWrapper">
                    <div className="divTable">
                        <div className="divTableBody">
                            <div className="divTableRow">
                                <div className="divTableCell">
                                    <h3>{category_one}</h3>
                                </div>
                                <div className="divTableCell">
                                    <h3>{category_two}</h3>
                                </div>
                                <div className="divTableCell">
                                    <h3>{category_three}</h3>
                                </div>
                                <div className="divTableCell">
                                    <h3>{category_four}</h3>
                                </div>
                                <div className="divTableCell">
                                    <h3>{category_five}</h3>
                                </div>
                                <div className="divTableCell">
                                    <h3>{category_six}</h3>
                                </div>
                            </div>
                            {questionsForBoardMap}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CommunityPlayboard;