import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

export default function LandingPage(){
    return(
        <div>
            <h2> This is the Jeopardy Generator!</h2>
            <Link to="/login">Login</Link>{' '}
            <Link to="/registration">register</Link>
        </div>
    )
}