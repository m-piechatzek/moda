import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import Feed from './components/Feed'
import Profile from './components/Profile'
import Post from './components/Post'
import Post3 from './components/Post3'

class App extends Component {
  render() {
    return (
      <div>

        {/* Header will eventually go here */}

        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/post3" component={Post3} />
        </Switch>
      </div>
    );
  }
}

export default App;
