import React from 'react'
import SortSelect from '../components/SortSelect'
import BoardList from '../components/BoardList'

export default function RecentBoards(){
    return(
        <div>
            <SortSelect />
            <BoardList />
        </div>
    )
}