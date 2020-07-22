import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from './CircleButton'
import { countNotesForFolder } from './notes-helpers'
import './NoteListNav.css'

export default function NoteListNav(props) {
  return (
    <div className='boardNav'>
      <div className="wrapper">
      <h2>{props.name}</h2>
        <p>{props.date}</p>
        <div>
          <button type="button"> EDIT </button>
          <button type="button"> PLAY </button>
          <button type="button"> SHARE </button>
          <button type="button"> DELETE </button>
        </div>
      </div>
    </div>
  )
}

NoteListNav.defaultProps = {
  folders: []
}