import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import About from './components/About'
import UserPage from './components/UserPage'
import LoginPage from './components/LoginPage'
import axios from 'axios'
import UserShow from './components/UserShow';
import EditUser from './components/EditUser';
import NewList from './components/NewList';

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
            <h3>✓List</h3>
          </div>
          <div>
            <Link to="/login"><button>Log In</button></Link>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/users/:userId" component={UserShow} />
            <Route exact path="/users/:userId/edit" component={EditUser} />`
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users/:userId/list/new" component={NewList}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
