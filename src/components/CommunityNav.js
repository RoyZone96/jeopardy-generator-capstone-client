import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import config from '../config'
import ApiContext from '../ApiContext'



export default class BoardNav extends Component {
  static defaultProps = {
    onDeleteBoard: () => { },
    match: {
      params: {}
    }
  }

  state = {
    board_title: '',
    isLiked: false,
    likes: 0,
    board_id: 0,
    existingBoards: {}
  }

  static contextType = ApiContext;



  componentDidMount() {
    console.log(this.props)
    let url = `${config.API_ENDPOINT}/communityBoards/${this.props.id}`
    // console.log(url)
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then((responseJson) => {
        // console.log(responseJson)
        this.setState({
          board_id: responseJson.id,
          board_title: responseJson.board_title,
          likes: responseJson.likes
        })
        // console.log(this.state)
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  toggleLike = (event) => {
    // event.preventDefault()
    let existingLikes = this.state.likes + 1

    let updateLikes = {
      likes: existingLikes
    }


    // console.log(updateLikes)

    fetch(`${config.API_ENDPOINT}/communityBoards/${this.props.id}`,
      {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updateLikes),
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(response => {
        // console.log(response)
        window.location = "/community"
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  render() {
    const { board_id, board_title, day_posted, likes } = this.state;

    return (
      <div className='boardNav'>
        <h2>{day_posted && format(parseISO(day_posted), 'MMM d, yyyy')}</h2>
        <div className="button-spacer">
          <Link to={`/communityPlay/${this.props.id}`}>
            <button type="button"> PLAY </button>
          </Link>
        </div>
        <div className="button-spacer">
          <button onClick={this.toggleLike}> LIKE: {likes}</button>
        </div>
      </div>
    )
  }
}
