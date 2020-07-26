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
                            <label for="score" className="pointer"> => </label>
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
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/100">100</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/200">200</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/300">300</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/400">400</Link></div>
                    </div>
                    <div className="divTableRow">
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                        <div className="divTableCell"><Link to="/playquestion/500">500</Link></div>
                    </div>
                </div>
            </div>
        </section>
    )
}