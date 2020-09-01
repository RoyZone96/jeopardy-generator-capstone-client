import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MyBoards from './Routes/MyBoards'
import CommunityBoards from './Routes/CommunityBoards'
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


class App extends Component {
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
      addBoard: this.addBoard,
      deleteBoard: this.deleteBoard,
      shareBoard: this.shareBoard,
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
                    <PrivateRoute path='/community' component={CommunityBoards} />
                    <PrivateRoute path='/support' component={Support} />
                    <PrivateRoute path='/question/:value' component={QuestionForm} />
                    <PrivateRoute path='/play' component={PlayBoard} />
                    <PrivateRoute path= '/newboard' component={AddBoard} />
                    <PrivateRoute path='/board/:id' component={Board} />
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

export default withRouter(App)