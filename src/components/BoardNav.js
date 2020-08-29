import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import config from '../config'
import ApiContext from '../ApiContext'


export default class BoardNav extends Component {
  static defaultProps = {
    onDeleteNote: () => { },
  }
  static contextType = ApiContext;



  handleClickDelete = e => {
    e.preventDefault()
    const { board_id } = this.props.match.params.id

    fetch(`${config.API_ENDPOINT}/boards/${board_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteBoard(board_id)
        this.props.onDeleteBoard(board_id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { board_title, id, modified } = this.props
    return (
      <div className='boardNav'>
        <div className="wrapper">
          <h2>{board_title}</h2>
          <h2>{modified && format(parseISO(modified), 'MMM d, yyyy')}</h2>
          <div>
            <Link to={`/board/${id}`}><button type="button"> EDIT </button></Link>
            <Link to="/play"><button type="button"> PLAY </button></Link>
            <button type="button"> SHARE </button>
            <button type="button" onClick={this.handleClickDelete}> DELETE </button>
          </div>
        </div>
      </div>
    )
  }
}
