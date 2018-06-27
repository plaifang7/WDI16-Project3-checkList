import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserPage extends Component {
state = {
    users: []
}

componentDidMount() {
    axios.get('/api/users')
    .then((res) => {
        this.setState({users: res.data.users})
    })
}
    render() {

        return (
            <div>

                {this.state.users.map((user, index) => {
                    return (
                        <div>
                            <div key={index}>
                                <img  src={user.img} alt={user.userName} />
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