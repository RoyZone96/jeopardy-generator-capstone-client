import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink to='/myboards'>
                <p> MY BOARDS | </p>
            </NavLink>
            <NavLink to='/community'>
                <p> COMMUNITY BOARDS | </p>
            </NavLink>
            <NavLink to='/support'>
                <p> SUPPORT |</p>
            </NavLink>
        </div>
    )
}