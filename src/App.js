import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import NavLinks from './NavLinks'
import MyBoards from './MyBoards'
import PopularBoards from './PopularBoards'
import RecentBoards from './RecentBoards'
import Support from './Support'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main className='App'>
          <NavLinks />
          <Switch>
            <Route exact path='/' component={MyBoards} />
            <Route path='/popular' component={PopularBoards} />
            <Route path='/recent' component={RecentBoards} />
            <Route path='/support' component={Support} />
            <Route />
          </Switch>
          <div className="staging-area">

          </div>
        </main>
      </Router>
    );
  }
}
