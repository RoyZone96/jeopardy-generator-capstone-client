import React, { Component } from 'react'
import SortSelect from '../components/SortSelect'
import config from '../config'
import CommunityList from '../components/CommunityList'
import LogoutButton from '../components/LogoutButton'
import NavLinks from '../components/NavLinks'


export default class CommunityBoards extends Component {
    state = {
        boards: []
    }

    componentDidMount() {
        Promise.all([
            fetch(`${config.API_ENDPOINT}/communityBoards`)
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
                <LogoutButton />
                <NavLinks />
                <SortSelect />
                <CommunityList />
            </div>
        )
    }
}
