import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserPage extends Component {
    state = {
        user: {
            shoppingList: []
        }
    }

        
    render() {

        return (
            <div>
                <h1>Select a User</h1>

                {this.props.users.map((user) => {
                    return (
                            <Link key={user._id} to={`/user/${user._id}`}>{user.userName}</Link>
                    )
                })}
            </div>
        )
    }
}


export default UserPage;