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
    console.log(this.props)
    let url = `${config.API_ENDPOINT}/communityBoards/${this.props.id}`
    console.log(url)
    fetch(url, {
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
        console.log(res)
        this.setState({
          board_title: res.board_title,
          likes: 0
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }


  toggleLike = (event) => {
    // event.preventDefault()
    let existingLikes = parseInt(this.state.likes)
    this.setState({
      isLiked: !this.state.isLiked,
      likes: existingLikes++
    })
  }

  render() {
    const { day_posted, likes } = this.state;

    return (
      <div className='boardNav'>
          <h2>{day_posted && format(parseISO(day_posted), 'MMM d, yyyy')}</h2>
          <div className="button-spacer">
            <Link to={`/play/${this.props.id}`}>
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
