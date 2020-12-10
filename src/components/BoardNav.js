import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import config from '../config'
import ApiContext from '../ApiContext'


export default class BoardNav extends Component {
  static defaultProps = {
    onDeleteBoard: () => { },
    match: {
      params: {}
    },
    onShareBoard: () => { },
    match: {
      params: {}
    }
  }

  state = {
    board_title: "",
    category_five: "",
    category_four: "",
    category_one: "",
    category_six: "",
    category_three: "",
    category_two: "",
    date_created: "",
    date_updated: "",
    id: 0,
    times_played: 0,
    user_id: 0
  }

  static contextType = ApiContext;

  componentDidMount() {
    const url = `${config.API_ENDPOINT}/boards/${this.props.id}`
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
        return res.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          board_title: responseJson.board_title,
          category_five: responseJson.category_five,
          category_four: responseJson.category_four,
          category_one: responseJson.category_one,
          category_six: responseJson.category_six,
          category_three: responseJson.category_three,
          category_two: responseJson.category_two,
          date_created: responseJson.date_created,
          date_updated: responseJson.date_updated,
          id: responseJson.id,
          times_played: responseJson.times_played,
          user_id: responseJson.user_id
        })
      })
  }

  handlePost = e => {
    e.preventDefault()
    const { id } = this.props;
    const sharedBoard = {
      board_title: this.state.board_title,
      category_five: this.state.category_five,
      category_four: this.state.category_four,
      category_one: this.state.category_one,
      category_six: this.state.category_six,
      category_three: this.state.category_three,
      category_two: this.state.category_two,
      // date_created: this.state.date_created,
      // date_updated: this.state.date_updated,
      // id: id,
      // times_played: this.state.times_played,
      user_id: this.state.user_id,
      likes: 0
    }
    console.log(sharedBoard)
    
    fetch(`${config.API_ENDPOINT}/communityBoards`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(sharedBoard),
      })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(response =>
        this.context.shareBoard(response),
        console.log(ApiContext))
      .then(
        console.log(sharedBoard),
        window.location = '/'
      )
      .catch(error => {
        console.log(error.message)
      })
  }


  handleClickDelete = e => {
    e.preventDefault()
    const { id } = this.props;

    fetch(`${config.API_ENDPOINT}/boards/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res
      })
      .then(() => {
        this.context.deleteBoard(id)
        this.props.onDeleteBoard(id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <div className='boardNav'>
        <div className="wrapper">
          <div>
            <Link to={`/board/${this.props.id}`}>
              <button type="button"> EDIT </button>
            </Link>
            <Link to={`/play/${this.props.id}`}>
              <button type="button"> PLAY </button>
            </Link>
            <button type="submit" onClick={this.handlePost}> SHARE </button>
            <button type="button" onClick={this.handleClickDelete}> DELETE </button>
          </div>
        </div>
      </div>
    )
  }
}
