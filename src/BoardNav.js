import React from 'react'
import { NavLink, Link } from 'react-router-dom'



export default function NoteListNav(props) {
  return (
    <div className='boardNav'>
      <div className="wrapper">
      <h2>{props.name}</h2>
        <p>{props.date}</p>
        <div>
          <Link to="/board"><button type="button"> EDIT </button></Link>
          <Link to="/play"><button type="button"> PLAY </button></Link>
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