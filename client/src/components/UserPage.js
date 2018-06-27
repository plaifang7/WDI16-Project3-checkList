import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserPage extends Component {
    render() {
        const userObj = this.props.users
        console.log(userObj)
        const userList = userObj.map((user) => {
            return (
                <div>
                    <img src={user.img} alt={user.firstName} />
                    <button>
                        <Link key={user._id} to={`/users/${user._id}`}> View {user.userName} 's Profile</Link>
                    </button>
                    </div>
            )
        })
        return (
            <div>
                <h1>Select a User</h1>
                <div>
                {userList}
                </div>
            </div>
        );
    }
}


export default UserPage;