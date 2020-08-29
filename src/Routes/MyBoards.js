import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'
import Welcome from '../components/Welcome'
import SortSelect from '../components/SortSelect'
import BoardNav from '../components/BoardNav'
import LogoutButton from "../components/LogoutButton"
import AddBoard from "../AddBoard"
import config from "../config"
import Board from '../components/Board'


export default class MyBoards extends Component{
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
                console.error({ error });
            });
    }
    handleAddBoard = (board) => {
        this.setState({
                boards: [...this.state.boards, board]
        })
}

renderNavRoutes() {
    return (
        <>
            {['/', '/board/:boardId'].map(path => (
                <Route
                        exact
                        key={path}
                        path={path}
                        component={BoardNav}
                />
            ))}
            <Route path="/board/:boardId" component={Board} />
            <Route path="/newboard" component={AddBoard} />
			</>
		);
	}

render() {
    const boards = this.state.boards
    return (
        <div>
            <Welcome />
            <LogoutButton />
            <NavLinks />
            <Link to="/"><button type="button">
                NEW BOARD +
                </button></Link>
            <SortSelect />
            {boards.map(boards =>
                <BoardNav />)}
        </div>
    )
}
}