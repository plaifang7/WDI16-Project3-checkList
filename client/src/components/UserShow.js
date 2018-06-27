import React, { Component } from 'react';
import axios from 'axios'

class UserShow extends Component {
state = {
    users: [],
    shoppingList: []
}

    componentDidMount() {
        const userId = this.props.match.params.id
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({
                    users: res.data.users,
                    shoppingList: res.data.users.shoppingList
                })

            })

    }
    render() {
        return (
            <div>
               <h1>Hello</h1> 
            </div>
        );
    }
}

export default UserShow;