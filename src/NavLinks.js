import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation(){
    return(
        <div className="navigation">
            <NavLink path to='/myboards'><p> MY BOARDS | </p></NavLink>
            <NavLink path to= '/popular'><p> POPULAR BOARDS |</p></NavLink>
            <NavLink path to= '/recent'><p> RECENT BOARDS | </p></NavLink>
            <NavLink path to= '/support'><p> SUPPORT |</p></NavLink>
        </div>
    )
}