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
    }
  }

  state = {
    board_title: "",
    modified: ''
  }

  static contextType = ApiContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/boards/${this.props.id}`, {
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
          modified: res.date_modified
        })
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
    const { board_title, modified } = this.state;

    return (
      <div className='boardNav'>
        <div className="wrapper">
          <h2>{board_title}</h2>
          <div>
            <Link to={`/board/${this.props.id}`}><button type="button"> EDIT </button></Link>
            <Link to={`/play/${this.props.id}`}><button type="button"> PLAY </button></Link>
            <button type="button" onClick={this.handleClickDelete}> DELETE </button>
          </div>
        </div>
      </div>
    )
  }
}
