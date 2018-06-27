import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserPage extends Component {
    render() {
        const userObj = this.props.users
        console.log(userObj)
        const userList = userObj.map((user) => {
            let pathid = `/users/${user._id}`
            return (
                <div>
                    <img src={user.img} alt={user.firstName} />
            
                    <button key={user._id}>
                        <Link to={pathid}> View {user.userName} 's Profile</Link>
                    </button>
                </div>
            )
        })
        console.log(userList)
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