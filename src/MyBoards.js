import React from 'react'
import { Link } from 'react-router-dom'
import SortSelect from './SortSelect'
import BoardList from './BoardList'


export default function MyBoards() {
    return (
        <div>
            <Link to="/newboard"><button type="button">
                NEW BOARD +
                </button></Link>
            <SortSelect />
            <BoardList />
        </div>
    )
}