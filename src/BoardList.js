import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BoardNav from './BoardNav'


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
