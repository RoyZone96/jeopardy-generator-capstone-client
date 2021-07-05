import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'
import Welcome from '../components/Welcome'
import BoardNav from '../components/BoardNav'
import SortSelect from '../components/SortSelect'
import config from "../config"
import ApiContext from '../ApiContext'
import TokenService from '../services/TokenService'
import BoardsApiService from '../services/BoardsApiService'


export default class MyBoards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }

    }



    componentDidMount() {
        this.getAllBoards()
    }

    getAllBoards() {
        const user_id = TokenService.getUserId()
        console.log(user_id)

        let boardUrl = `${config.API_ENDPOINT}/boards`

        console.log(boardUrl)

        fetch(boardUrl)
            .then((boardsRes) => {
                if (!boardsRes.ok)
                    return boardsRes.json().then(e => Promise.reject(e));
                return boardsRes.json();
            })
            .then((boards) => {

                console.log(boards)
                console.log(user_id)

                let filteredBoards = [];
                for (let i = 0; i < boards.length; i++) {
                    if (boards[i].user_id == user_id) {
                        filteredBoards.push(boards[i]);
                    }
                }
                this.setState({ boards: filteredBoards });
            })
            .catch(error => {
                console.log({ error });
            });
    }

    handleSearch = (event) => {
        event.preventDefault()
        const data = event.target.value
        let filterLowerCased = data.toLowerCase()
        //if no search term display all students
        if (data == '') {
            this.getAllBoards()
        }
        // if there is a search term narrow it down
        else {
            let filteredBoards = []
            for (let i = 0; i < this.state.boards.length; i++) {
                let searchTermLowercased = this.state.boards[i].board_title.toLowerCase()
                if (searchTermLowercased.indexOf(filterLowerCased) > -1) {
                    console.log('found')
                    filteredBoards.push(this.state.boards[i])
                }
            }
            // if there are no results display an error
            if (filteredBoards.length == 0) {
                this.setState({
                    boards: []
                })
            }
            //if there are results display them
            else {
                console.log(filteredBoards)
                this.setState({
                    boards: filteredBoards
                })
            }
        }
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
                <ul>
                    <li className="menu-select">
                        <div className="menu-wrapper">
                            <div>
                                <p className="title">{boards.board_title}</p>
                                <BoardNav id={boards.id} />
                            </div>
                        </div>
                    </li>
                </ul>
            )
        })
        return (
            <div>
                <Welcome />
                <NavLinks />
                <div className="sort">
                    <SortSelect />
                    <form>
                        <input type="text"
                            className="search_bar"
                            name='filter'
                            placeholder="Input Here..."
                            onChange={(event) => this.handleSearch(event)} />
                    </form>
                </div>
                <section key={boards.id} className="board-list">
                    {boardsOutput}
                </section>
                <section className="new-wrapper">
                    <Link to="/newboard">
                        <button className="new-board" type="button">NEW BOARD +</button>
                    </Link>
                </section>
            </div>
        )
    }
}