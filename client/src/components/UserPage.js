import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserPage extends Component {
    state = {
        user: {},
        shoppingList: []
        }
    
  

    render() {

        return (
            <div>

                {this.props.users.map((user) => {
                    return (
                        <div>
                            <div>
                                <img src={user.img} alt={user.userName} />
                            </div>
                            <Link key={user._id} to={`/user/${user._id}`}>{user.userName}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default UserPage;