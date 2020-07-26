import React from 'react'
import SortSelect from './SortSelect'
import BoardList from './BoardList'

export default function RecentBoards(){
    return(
        <div>
            <SortSelect />
            <BoardList />
        </div>
    )
}