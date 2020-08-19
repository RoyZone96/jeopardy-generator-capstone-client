import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MyBoards from '../MyBoards'
import PopularBoards from '../Routes/PopularBoards'
import RecentBoards from '../Routes/RecentBoards'
import Support from '../Support'
import LoginForm from '../LoginForm'
import LandingPage from '../LandingPage';
import RegistrationForm from '../RegistrationForm';
import QuestionForm from '../Routes/QuestionForm'
import ApiContext from '../ApiContext'
import PlayBoard from '../Playboard'
import PlayQuestion from '../PlayQuestion'
import Board from './Board'
import PrivateRoute from '../PrivateRoute'
import PublicRoute from '../PublicRoute'


export default class App extends Component {
  state = {
    loggedIn: false,
    board: [],
    user: {}
  }

  setUser = (event) => { }

  addBoard = (event) => { }

  deleteBoard = (event) => { }

  shareBoard = (event) => { }

  render() {
    const value = {
      board: this.state.board,
      addBoard: this.state.addBoard,
      deleteBoard: this.state.deleteBoard,
      shareBoard: this.state.shareBoard,
    }
    loggedIn = this.state.loggedIn

    return (
      <ApiContext.Provider value={value}>
        <div>
          <Router>
            <Header />
            <main className='App'>
              <Switch>
                  <div>
                    <PublicRoute exact path="/" component={LandingPage} />
                    <PublicRoute path='/login' component={LoginForm} />
                    <PublicRoute path='/registration' component={RegistrationForm} />
                    <PrivateRoute path='/myboards' component={MyBoards} />
                    <PrivateRoute path='/popular' component={PopularBoards} />
                    <PrivateRoute path='/recent' component={RecentBoards} />
                    <PrivateRoute path='/support' component={Support} />
                    <PrivateRoute path='/question/:value' component={QuestionForm} />
                    <PrivateRoute path='/play' component={PlayBoard} />
                    <PrivateRoute path='/newboard' component={Board} />
                    <PrivateRoute path='/playquestion/:category/:value/:id' component={PlayQuestion} />
                  </div>
              </Switch>
            </main>
          </Router>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}