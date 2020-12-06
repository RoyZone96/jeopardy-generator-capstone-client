import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'
import Welcome from '../components/Welcome'
import SortSelect from '../components/SortSelect'
import BoardNav from '../components/BoardNav'
import LogoutButton from "../components/LogoutButton"
import AddBoard from "../AddBoard"
import config from "../config"
import Board from '../components/Board'
import BoardList from '../components/BoardList'


export default class MyBoards extends Component {
   
   
    state = {
        boards: []
    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/boards`)
        ])
            .then(([boardsRes]) => {
                if (!boardsRes.ok)
                    return boardsRes.json().then(e => Promise.reject(e));
                return Promise.all([boardsRes.json()]);
            })
            .then(([boards]) => {
                this.setState({ boards });
                console.log(boards)
            })
            .catch(error => {
                console.log({ error });
            });
    }
    handleAddBoard = (board) => {
        this.setState({
            boards: [...this.state.boards, board]
        })
    }


    render() {
        const boards = this.state.boards
        console.log(boards)
        let boardsOutput = boards.map(boards => {
            console.log(boards)
            return (
                <section key={boards.id} className="board-list">
                    <ul>
                        <li>
                            <div className="wrapper">
                                <div>
                                    <BoardNav id={boards.id} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            )
        })
        return (
            <div>
                <Welcome />
                <LogoutButton />
                <NavLinks />
                <Link to="/newboard">
                    <button type="button">NEW BOARD +</button>
                </Link>
                <SortSelect />
                {boardsOutput}
            </div>
        )
    }
}