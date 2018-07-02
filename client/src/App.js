import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
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
import ShoppingList from './components/ShoppingList'
import styled from 'styled-components'

const NavBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 7px 7vw;

Link {
  color: black;
}

`
const AppWrap = styled.div`
font-family: 'Montserrat', sans-serif;
`

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
        <AppWrap>
          <nav className="navbar navbar-default navbar-fixed-top">
            <NavBar>
              <div><h3>✓List</h3></div>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">About</Link></div>
              <div><Link to="/users">Users</Link></div>
              <div>
                <Link to="/login"><Button>Log In</Button></Link>
              </div>
            </NavBar>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/users/:userId" component={UserShow} />
            <Route exact path="/users/:userId/edit" component={EditUser} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users/:userId/list/new" component={NewList} />
            <Route exact path="/users/:userId/list/:listId" component={ShoppingList} />
          </Switch>
        </AppWrap>
      </Router>

    );
  }
}

export default App;
