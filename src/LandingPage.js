import React from 'react'
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

export default function LandingPage(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/login" component={LoginForm} />
                    <Route path="/registration" component={RegistrationForm} />
                </Switch>
            </Router>
        </div>
    )
}