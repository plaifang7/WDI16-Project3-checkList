import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import UserPage from './components/UserPage'
import LoginPage from './components/LoginPage'
import axios from 'axios'

class App extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((res) => {
        this.setState({ user: res.data.users })
      })
  }
  render() {

    const LogInWrap = (props) => {
      <LoginPage {...props} users={this.state.users} />
    }

    const UserWrap = () => {
      <UserPage users={this.state.users} />
    }

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
            <Route exact path="/users" render={UserWrap} />
            <Route path="/login" render={LogInWrap} />
            <Route exact path="/about" component={About} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
