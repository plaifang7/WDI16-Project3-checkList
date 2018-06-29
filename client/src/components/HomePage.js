import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to ✓List</h1>
        <p>never forget what you came to the store for again!</p>

        <Link to="/users"><button>Enter</button></Link>

      </div>
    );
  }
}

export default HomePage;