import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CandidateDetail from './pages/CandidateDetail';
import NewHacker from './pages/NewHacker';
import Swipe from './pages/Swipe';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" activeClassName="selected" className="navbar-brand">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/newhacker" activeClassName="selected" className="navbar-brand">
                  Add New Hacker
                </NavLink>
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <NavLink to="/swipe" activeClassName="selected" className="nav-link">
                  Swipe
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/candidate/:candidateSurname" component={CandidateDetail} />
            <Route path="/newhacker" component={NewHacker} />
            <Route path="/swipe" component={Swipe} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
