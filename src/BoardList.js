import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Board from './Board'
import CircleButton from './CircleButton'
import BoardNav from './BoardNav'


export default function BoardList(props) {
  return (
    <div className="wrapper">
          <h2>Board Title</h2>
          <p>Date Created/Updated</p>
          <div>
            <BoardNav />
          </div>
        </div>
  )
}
