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
  static contextType = ApiContext;

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

  handleClickDelete = e => {
    e.preventDefault()
    const { id } = this.props.match.params

    fetch(`${config.API_ENDPOINT}/boards/${id}`, {
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
        this.context.deleteBoard(id)
        this.props.onDeleteBoard(id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { board_title, id, modified } = this.props;
    console.log(this.props)
    return (
      <div className='boardNav'>
        <div className="wrapper">
          <h2>{board_title}</h2>
          <h2>{modified && format(parseISO(modified), 'MMM d, yyyy')}</h2>
          <div>
            <Link to={`/board/:${id}`}><button type="button"> EDIT </button></Link>
            <Link to="/play"><button type="button"> PLAY </button></Link>
            <button type="button"> SHARE </button>
            <button type="button" onClick={this.handleClickDelete}> DELETE </button>
          </div>
        </div>
      </div>
    )
  }
}
