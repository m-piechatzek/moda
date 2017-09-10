import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>

        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
      );
  }
}

export default App;
