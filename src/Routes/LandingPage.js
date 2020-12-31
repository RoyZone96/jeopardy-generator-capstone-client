import React from 'react'
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <div className="wrapper">
            <h2> This is the</h2>
            <h1 className="app-title">Jeopardy Generator!</h1>
            <div></div>
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