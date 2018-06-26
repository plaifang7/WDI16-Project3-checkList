import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to checkList</h1>

                <button><Link to="/users">Enter</Link></button>
                
            </div>
        );
    }
}

export default HomePage;