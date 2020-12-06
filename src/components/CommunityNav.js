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
    likes: 0
  }

  static contextType = ApiContext;

  

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/communityBoards/${this.props.id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res
      })
      .then((res) => {
        this.setState({
          board_title: res.board_title,
          day_posted: res.day_posted,
          likes: 0
        })
      })
  }


  toggleLike = (event) => {
    this.setState({
      isLiked: !this.state.isLiked,
      likes: 0 + 1
    })
  }

  render() {
    const { board_title, day_posted, likes } = this.state;

    return (
      <div className='boardNav'>
        <div className="wrapper">
          <h2>{board_title}</h2>
          <h2>{day_posted && format(parseISO(day_posted), 'MMM d, yyyy')}</h2>
          <div>

            <Link to="/play">
              <button type="button"> PLAY </button>
            </Link>
            <button onChange={this.toggleLike()}> LIKE: {likes}</button>
          </div>
        </div>
      </div>
    )
  }
}
