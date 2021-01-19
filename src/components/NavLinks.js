import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className="navigation">
            <ul className="menu">
                <li>
                    <NavLink to='/myboards'>
                        <p> MY BOARDS | </p>
                    </NavLink></li>
                <li>
                    <NavLink to='/community'>
                        <p> COMMUNITY BOARDS | </p>
                    </NavLink></li>
                <li>
                    <NavLink to='/support'>
                        <p> SUPPORT </p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}