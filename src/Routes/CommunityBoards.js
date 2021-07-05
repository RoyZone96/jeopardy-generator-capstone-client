import React, { Component } from 'react'
import CommunitySortSelect from '../components/CommunitySortSelect'
import config from '../config'
import CommunityNav from '../components/CommunityNav'
import NavLinks from '../components/NavLinks'


export default class CommunityBoards extends Component {
    state = {
        communityBoards: []
    }



    componentDidMount() {
        this.getAllCommunityBoards()
    }

    getAllCommunityBoards() {
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

    handleSearch = (event) => {
        event.preventDefault()
        const data = event.target.value
        let filterLowerCased = data.toLowerCase()
        //if no search term display all students
        if (data == '') {
            this.getAllCommunityBoards()
        }
        // if there is a search term narrow it down
        else {
            let filteredBoards = []
            for (let i = 0; i < this.state.communityBoards.length; i++) {
                let searchTermLowercased = this.state.communityBoards[i].board_title.toLowerCase()
                if (searchTermLowercased.indexOf(filterLowerCased) > -1) {
                    console.log('found')
                    filteredBoards.push(this.state.communityBoards[i])
                }
            }
            // if there are no results display an error
            if (filteredBoards.length == 0) {
                this.setState({
                    communityBoards: []
                })
            }
            //if there are results display them
            else {
                console.log(filteredBoards)
                this.setState({
                    communityBoards: filteredBoards
                })
            }
        }
    }
    render() {
        let communityListHtml = <p>No Results</p>


        //If the question was edited before display the last text for it in text area
        if (this.state.communityBoards.length != 0) {
            communityListHtml = this.state.communityBoards.map((communityBoard, key) => (
                <section key={key} className="community-list">
                    <ul>
                        <li className="menu-select">
                            <div className="menu-wrapper">
                                <p className="title">{communityBoard.board_title}</p>
                                <CommunityNav id={communityBoard.id} />
                            </div>
                        </li>
                    </ul>
                </section>
            ))
        }
        return (
            <div>
                <NavLinks />
                <div className="sort">
                    <CommunitySortSelect />
                    <form>
                        <input type="text"
                            className="search_bar"
                            name='filter'
                            placeholder="Input Here..."
                            onChange={(event) => this.handleSearch(event)} />
                    </form>
                </div>
                {communityListHtml}
            </div>
        )
    }
}
