import React, { Component } from 'react'
import CommunitySortSelect from '../components/CommunitySortSelect'
import config from '../config'
import CommunityNav from '../components/CommunityNav'
import LogoutButton from '../components/LogoutButton'
import NavLinks from '../components/NavLinks'


export default class CommunityBoards extends Component {
    state = {
        communityBoards: []
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
            .then(([communityBoards]) => {
                this.setState({ communityBoards });
                console.log(communityBoards)
            })
            .catch(error => {
                console.log({ error });
            });
    }

    render() {
        let communityListHtml = <p>No Results</p>


        //If the question was edited before display the last text for it in text area
        if (this.state.communityBoards.length != 0) {
             communityListHtml = this.state.communityBoards.map((communityBoard, key) => (
                <section key={key} className="community-list">
                <ul>
                    <li>
                        <div className="menu-wrapper">
                              {communityBoard.board_title}   
                              <CommunityNav id={communityBoard.id}/> 
                        </div>
                    </li>
                </ul>
            </section>
            ))
        }
        return (
            <div>
                <LogoutButton />
                <NavLinks />
                <CommunitySortSelect />
                {communityListHtml}
            </div>
        )
    }
}
