import React from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from './ApiContext'
import config from './config'



export default class Board extends React.Component {
  static defaultProps = {
    onDeleteNote: () => { },
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
          <button type="button">
            Back
          </button>
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
                <div className="divTableCell"><a href="/#">100</a></div>
                <div className="divTableCell"><a href="/#">100</a></div>
                <div className="divTableCell"><a href="/#">100</a></div>
                <div className="divTableCell"><a href="/#">100</a></div>
                <div className="divTableCell"><a href="/#">100</a></div>
                <div className="divTableCell"><a href="/#">100</a></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><a href="/#">200</a></div>
                <div className="divTableCell"><a href="/#">200</a></div>
                <div className="divTableCell"><a href="/#">200</a></div>
                <div className="divTableCell"><a href="/#">200</a></div>
                <div className="divTableCell"><a href="/#">200</a></div>
                <div className="divTableCell"><a href="/#">200</a></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><a href="/#">300</a></div>
                <div className="divTableCell"><a href="/#">300</a></div>
                <div className="divTableCell"><a href="/#">300</a></div>
                <div className="divTableCell"><a href="/#">300</a></div>
                <div className="divTableCell"><a href="/#">300</a></div>
                <div className="divTableCell"><a href="/#">300</a></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><a href="/#">400</a></div>
                <div className="divTableCell"><a href="/#">400</a></div>
                <div className="divTableCell"><a href="/#">400</a></div>
                <div className="divTableCell"><a href="/#">400</a></div>
                <div className="divTableCell"><a href="/#">400</a></div>
                <div className="divTableCell"><a href="/#">400</a></div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell"><a href="/#">500</a></div>
                <div className="divTableCell"><a href="/#">500</a></div>
                <div className="divTableCell"><a href="/#">500</a></div>
                <div className="divTableCell"><a href="/#">500</a></div>
                <div className="divTableCell"><a href="/#">500</a></div>
                <div className="divTableCell"><a href="/#">500</a></div>
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

