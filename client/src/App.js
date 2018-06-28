import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import UserPage from './components/UserPage'
import LoginPage from './components/LoginPage'
import axios from 'axios'
import UserShow from './components/UserShow';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((res) => {
        this.setState({ users: res.data.users })
      })
  }
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
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route path="/users/:userId" component={UserShow} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/about" component={About} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
