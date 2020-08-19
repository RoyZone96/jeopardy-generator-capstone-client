import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Welcome from './Welcome'
import SortSelect from './SortSelect'
import BoardList from './components/BoardList'


export default function MyBoards() {
    return (
        <div>
            <Welcome />
            <Link to="/"><button type="button">Logout</button></Link>
            <NavLinks />
            <Link to="/newboard"><button type="button">
                NEW BOARD +
                </button></Link>
            <SortSelect />
            <BoardList />
        </div>
    )
}