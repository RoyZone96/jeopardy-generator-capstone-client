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
            },
            category_one: {
                value: '',
                touched: false
            },
            category_two: {
                value: '',
                touched: false
            },
            category_three: {
                value: '',
                touched: false
            },
            category_four: {
                value: '',
                touched: false
            },
            category_five: {
                value: '',
                touched: false
            },
            category_six: {
                value: '',
                touched: false
            },
        }
    }

    static contextType = ApiContext

    handleBoardCreate = (event) => {
        event.preventDefault();

        const newBoard = JSON.stringify({
            user_id: TokenService.getUserId(),
            board_title: this.state.title.value,
            times_played: 0,
            category_one: this.state.category_one.value,
            category_two: this.state.category_two.value,
            category_three: this.state.category_three.value,
            category_four: this.state.category_four.value,
            category_five: this.state.category_five.value,
            category_six: this.state.category_six.value,
        })

        fetch(`${config.API_ENDPOINT}/boards`,
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: newBoard,
            })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(response => this.context.addBoard(response))
            .then(() => {
                this.props.history.push('/myBoards')
            })
            .catch(error => {

                console.log(error);
                console.log(error.message)
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
    setCategoryOne = (category_one) => {
        this.setState({
            category_one: {
                value: category_one,
                touched: true
            }
        })
    }

    setCategoryTwo = (category_two) => {
        this.setState({
            category_two: {
                value: category_two,
                touched: true
            }
        })
    }

    setCategoryThree = (category_three) => {
        this.setState({
            category_three: {
                value: category_three,
                touched: true
            }
        })
    }

    setCategoryFour = (category_four) => {
        this.setState({
            category_four: {
                value: category_four,
                touched: true
            }
        })
    }

    setCategoryFive = (category_five) => {
        this.setState({
            category_five: {
                value: category_five,
                touched: true
            }
        })
    }

    setCategorySix = (category_six) => {
        this.setState({
            category_six: {
                value: category_six,
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

    validateCategories() {
        const categories = this.state.categories.value.trim();
        if (categories.length === 0) {
            return 'Please input categories'
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
                />
                 <label htmlFor="category-title">Category title</label>
                <input
                    id="category-title"
                    type="text"
                    title="category-title"
                    onChange={event => this.setCategoryOne(event.target.value)}
                />
                 <label htmlFor="categories-title">Category title</label>
                <input
                    id="categories-title"
                    type="text"
                    title="categories-title"
                    onChange={event => this.setCategoryTwo(event.target.value)}
                />
                 <label htmlFor="categories-title">Category title</label>
                <input
                    id="categories-title"
                    type="text"
                    title="categories-title"
                    onChange={event => this.setCategoryThree(event.target.value)}
                /> 
                 <label htmlFor="categories-title">Category title</label>
                <input
                    id="categories-title"
                    type="text"
                    title="categories-title"
                    onChange={event => this.setCategoryFour(event.target.value)}
                /> 
                 <label htmlFor="categories-title">Category title</label>
                <input
                    id="categories-title"
                    type="text"
                    title="categories-title"
                    onChange={event => this.setCategoryFive(event.target.value)}
                />
                 <label htmlFor="categories-title">Category title</label>
                 <input
                    id="categories-title"
                    type="text"
                    title="categories-title"
                    onChange={event => this.setCategorySix(event.target.value)}
                />
                {this.state.title.touched && (<ValidationError message={this.validateBoardTitle()} />)}
                <button type="submit" disabled={this.validateBoardTitle()}>Post</button>
            </form>
        )
    }
}
