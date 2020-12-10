import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'
import Welcome from '../components/Welcome'
import SortSelect from '../components/SortSelect'
import BoardNav from '../components/BoardNav'
import LogoutButton from "../components/LogoutButton"
import config from "../config"
import ApiContext from '../ApiContext'
import TokenService from '../services/TokenService'
import BoardsApiService from '../services/BoardsApiService'


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

    handlePost = e => {
        e.preventDefault()
        const board_title = board_title
        const sharedBoard = {
            board_title: this.board_title,
            user_id: TokenService.getUserId(),
            board_id: BoardsApiService.getBoardsById(),
            likes: 0,
        }

        fetch(`${config.API_ENDPOINT}/communityBoards`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(sharedBoard),
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(response =>
                this.context.shareBoard(response),
                console.log(ApiContext))
            .then(
                console.log(sharedBoard),
                window.location = '/'
            )
            .catch(error => {
                console.log(error.message)
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
                                    <p>{boards.board_title}</p>
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