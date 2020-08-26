import React from 'react'
import BoardNav from './BoardListNav'
const { API_BASE_URL } = require('../config')


export default function BoardListNav(props) {

  return (
    <section className="board-list">
      <ul>
      <div className="wrapper">
        <h2> {props.name} </h2>
        <p>Date Created/Updated</p>
        <div>
          <BoardNav />
        </div>
      </div>
      </ul>
    </section>
  )
}
