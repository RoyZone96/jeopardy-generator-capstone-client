import React, { Component } from 'react'
import SortSelect from '../components/SortSelect'
import BoardList from '../components/BoardList'
import config from '../config'

export default class CommunityBoards extends Component {
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

    render() {
        return (
            <div>
                <SortSelect />
                <BoardList />
            </div>
        )
    }
}
