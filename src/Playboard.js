import React from 'react'
import { Link } from 'react-router-dom'

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
                        <div className="divTableCell"> <input type="text" placeholder="Category" required /></div>
                        <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                        <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                        <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                        <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                        <div className="divTableCell"><input type="text" placeholder="Category" required /></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/100/1">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100/2">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100/3">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100/4">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100/5">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100/6">100</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/200/1">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200/2">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200/3">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200/4">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200/5">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200/6">200</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/300/1">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300/2">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300/3">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300/4">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300/5">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300/6">300</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/400/1">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400/2">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400/3">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400/4">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400/5">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400/6">400</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/500/1">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500/2">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500/3">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500/4">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500/5">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500/6">500</Link></div>
                    </div>
                </div>
            </div>
        </section>
    )
}