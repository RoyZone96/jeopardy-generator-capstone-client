import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MyBoards from './Routes/MyBoards'
import PopularBoards from './Routes/PopularBoards'
import RecentBoards from './Routes/RecentBoards'
import Support from './Routes/Support'
import LoginForm from './Routes/LoginForm'
import LandingPage from './Routes/LandingPage';
import RegistrationForm from './Routes/RegistrationForm';
import QuestionForm from './Routes/QuestionForm'
import ApiContext from './ApiContext'
import PlayBoard from './Routes/Playboard'
import PlayQuestion from './Routes/PlayQuestion'
import Board from './components/Board'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AddBoard from './AddBoard';


export default class App extends Component {
  state = {
    hasError: false,
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
                    <PrivateRoute path= '/newboard' component={AddBoard} />
                    <PrivateRoute path='/board' component={Board} />
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