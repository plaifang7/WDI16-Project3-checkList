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
                        <div key={user._id}>
                            <div>
                                <img  src={user.img} alt={user.userName} />
                            </div>
                            <Link  to={`/users/${user._id}`}>{user.userName}</Link>
                            <div>
                                <button><Link to={`/users/${user._id}`}>View Profile</Link></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default UserPage;