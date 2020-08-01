import React from 'react'
import { Link } from 'react-router-dom'
import { Data } from './dummy-store'

export default function Playboard(props) {
    return (
        <section>
            <div>
                <Link to="/myboards"><button type="button">
                    Back
          </button></Link>
                <section className="scoreboard">
                    <div className="add">
                        <button type="button">Add player</button>
                    </div>
                    <div className="players">
                        <div className="player">
                            <label for="score" className="pointer"> =&#62; </label>
                            <input type="text" placeholder="name" />
                            <label for="score">Score</label>
                            <input type="text" className="score" placeholder="0" />
                        </div>


                        <div className="player">
                            <input type="text" placeholder="new player" />
                            <label for="score">Score</label>
                            <input type="text" className="score" placeholder="0" />
                        </div>

                    </div>

                </section>
            </div>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                        <div className="divTableCell"></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/tesla/100/1">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/100/2">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/100/3">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestionHistory-Tells-Us.../4">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/5">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Pop-Culture/100/6">100</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/tesla/200/1">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/200/2">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/200/3">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/History-Tells-Us.../200/4">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/200/5">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/200/6">200</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/tesla/300/1">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/300/2">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/300/3">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/History-Tells-Us.../300/4">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/300/5">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/300/6">300</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/tesla/400/1">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/400/2">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/400/3">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/History-Tells-Us.../400/4">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/400/5">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/History-Tells-Us.../400/6">400</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/tesla/500/1">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Jesus-Birth/500/2">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/Christmas-Carols/500/3">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/History-Tells-Us.../500/4">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/500/5">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/I-know-what-you-did-last-Sunday!/500/6">500</Link></div>
                    </div>
                </div>
            </div>
        </section>
    )
}