import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed'
import Profile from './components/Profile'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <div>
        <div className="custom-menu-wrapper fixed-header">
              <div className="pure-menu custom-menu custom-menu-top fixed-header">
                  <a href="#" className="pure-menu-heading custom-menu-brand"><img className="logo-size" src={"/images/logo_moda_black.jpg"} /></a>
                <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
              </div>
              <div className="fixed-header pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked fa-float" id="tuckedMenu">
                  <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-search fa-lg" aria-hidden="true"></i></a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-heart-o fa-lg" aria-hidden="true"></i></a></li>
                  <li className="pure-menu-item"><a href="#" className="pure-menu-link"><i className="fa fa-user-o fa-lg" aria-hidden="true"></i></a></li>
                  </ul>
              </div>
          </div>
          <div className="ghost-margin"></div>

        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/post" component={Post} />

        </Switch>
      </div>
      );
  }
}

export default App;
