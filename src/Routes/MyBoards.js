import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../components/NavLinks'
import Welcome from '../components/Welcome'
import SortSelect from '../components/SortSelect'
import BoardList from '../components/BoardList'
import LogoutButton from "../components/LogoutButton"


export default function MyBoards() {
    return (
        <div>
            <Welcome />
            <LogoutButton />
            <NavLinks />
            <Link to="/newboard"><button type="button">
                NEW BOARD +
                </button></Link>
            <SortSelect />
            <BoardList />
        </div>
    )
}