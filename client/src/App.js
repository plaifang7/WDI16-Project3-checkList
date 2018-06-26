import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as  Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </div>
          <div>
            <button><Link to="/login">Log In</Link></button>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={About}/>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
