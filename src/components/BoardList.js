import React from 'react'
import BoardNav from './BoardNav'
const { API_BASE_URL } = require('../config')


export default function BoardList(props) {
  

  return (
    <section className="board-list">
      <ul>
        <li>
          <div className="wrapper">
            <div>
              <BoardNav id={props.id}/>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
