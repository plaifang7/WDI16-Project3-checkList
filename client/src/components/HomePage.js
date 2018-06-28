import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to checkList</h1>

        <Link to="/users"><button>Enter</button></Link>

      </div>
    );
  }
}

export default HomePage;