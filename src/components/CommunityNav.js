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
      isLiked: false
  }

  static contextType = ApiContext;

  toggleLike = () => {
      this.setState({
        isLiked: !this.state.isLiked
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
    const { board_title, id, modified } = this.context;
    
    return (
      <div className='boardNav'>
        <div className="wrapper">
          <h2>{board_title}</h2>
          <h2>{modified && format(parseISO(modified), 'MMM d, yyyy')}</h2>
          <div>
            
            <Link to="/play">
              <button type="button"> PLAY </button>
              </Link>
          
          </div>
        </div>
      </div>
    )
  }
}
