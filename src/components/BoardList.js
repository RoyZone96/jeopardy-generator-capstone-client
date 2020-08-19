import React from 'react'
import { Link } from 'react-router-dom'
import BoardNav from './BoardNav'
const { API_BASE_URL } = require('../config')


export default function BoardList(props) {

  return (
    <div className="wrapper">
          <h2> Sample </h2>
          <p>Date Created/Updated</p>
          <div>
            <BoardNav />
          </div>
        </div>
  )
}
