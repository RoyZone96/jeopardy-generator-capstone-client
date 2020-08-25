import React, { Component } from 'react'
import config from './config'
import Board from './components/Board'
import ApiContext from './ApiContext'
import ValidationError from './ValidationError'
import TokenService from './services/TokenService'

export default class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {
                value: '',
                touched: false
            }
        }
    }

    static contextType = ApiContext

    handleBoardCreate = (event) => {
        event.preventDefault();

        const newBoard = JSON.stringify({
            board_title: this.state.title.value
        })

        fetch(`${config.API_ENDPOINT}/boards`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: newBoard,
                user_id: TokenService.getUserId()
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(response => this.context.addBoard(response))
            .then(() => {

                this.props.history.push('/')

            })
            .catch(error => {
                console.log(error);
                alert(error.message)
            })
    }

    setBoardTitle = (title) => {
        this.setState({
            title: {
                value: title,
                touched: true
            }
        })
    }

    validateBoardTitle() {
        const title = this.state.title.value.trim();
        if (title.length === 0) {
            return 'Title is required'
        }
    }

    render() {
        return (
            <form onSubmit={this.handleBoardCreate}>
                <label htmlFor="board-title">Board title</label>
                <input
                    id="board-title"
                    type="text"
                    title="board-title"
                    onChange={event => this.setBoardTitle(event.target.value)}
                ></input>
                {this.state.title.touched && (<ValidationError message={this.validateBoardTitle()} />)}
                <button type="submit" disabled={this.validateBoardTitle()}>Post</button>
            </form>
        )
    }
}
