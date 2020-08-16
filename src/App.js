import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NavLinks from './NavLinks'
import MyBoards from './MyBoards'
import PopularBoards from './PopularBoards'
import RecentBoards from './RecentBoards'
import Support from './Support'
import LoginForm from './LoginForm'
import LandingPage from './LandingPage';
import RegistrationForm from './RegistrationForm';
import Welcome from './Welcome';
import QuestionForm from './QuestionForm'
import ApiContext from './ApiContext'
import PlayBoard from './Playboard'
import PlayQuestion from './PlayQuestion'
import Board from './Board'
// import PrivateRoute from './PrivateRoute'
// import PublicRoute from './PublicRoute'


export default class App extends Component {
  state = {
    loggedIn: false,
    board: [],
    user: {}
    // questions: Data
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
    return (
      <ApiContext.Provider value={value}>
        <div>
          <Router>
            <Header />
            <main className='App'>
              <Welcome />
              <Link to="/"><button type="button">Logout</button></Link>
              <NavLinks />
              <Switch>
                if(isLoggedIn){
                  <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path='/login' component={LoginForm} />
                    <Route path='/registration' component={RegistrationForm} />
                  </div>
                } else {
                  <div>
                    <Route path='/myboards' component={MyBoards} />
                    <Route path='/popular' component={PopularBoards} />
                    <Route path='/recent' component={RecentBoards} />
                    <Route path='/support' component={Support} />
                    <Route path='/question/:value' component={QuestionForm} />
                    <Route path='/play' component={PlayBoard} />
                    <Route path='/newboard' component={Board} />
                    <Route path='/playquestion/:category/:value/:id' component={PlayQuestion} />
                  </div>
                }
              </Switch>
            </main>
          </Router>
          <Footer />
        </div>
      </ApiContext.Provider>
    );
  }
}