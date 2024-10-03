import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'


export default function LandingPage() {
    return (
        <div className="landing">
            <h1> This is the</h1>
            <h2 className="app-title">Jeopardy Generator!</h2>
            <div className="description">
                <p>Make you own Jeopardy boards and share them across the globe
                    <br></br>
                    Perfect for study sessions or parties
                </p>
            </div>
            <div className="menu">
                <div className="spacer">
                    <Link to="/login">Login</Link>{' '}
                </div>
                <div className="spacer">
                    <Link to="/registration">Register</Link>
                </div>
            </div>
        </div>
    )
}