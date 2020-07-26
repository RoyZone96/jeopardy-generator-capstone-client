import React from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from './ApiContext'
import QuestionForm from './QuestionForm'
import config from './config'



export default class Board extends React.Component {
  static defaultProps = {
    onDeleteBoard: () => { },
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const boardId = this.boardId.id

    fetch(`${config.API_ENDPOINT}/boards/${boardId}`, {
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
        this.context.deleteBoard(boardId)
        this.props.onDeleteBoard(boardId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <main>
        <div>
          <Link to="/myboards"><button type="button">
            Back
          </button></Link>
        </div>
        <section>
          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell"> <input type="text" placeholder="Category" required /></div>
                <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
                <div className="divTableCell"><Link to="/question/100">100</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
                <div className="divTableCell"><Link to="/question/200">200</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
                <div className="divTableCell"><Link to="/question/300">300</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
                <div className="divTableCell"><Link to="/question/400">400</Link></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
                <div className="divTableCell"><Link to="/question/500">500</Link></div>
              </div>
            </div>
          </div>

        </section>
        <div>
          <button type="button">
            Submit
          </button>
        </div>

      </main>
    )
  }
}

