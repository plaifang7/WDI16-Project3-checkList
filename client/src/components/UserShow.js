import React, { Component } from 'react';
import axios from 'axios'
import ShoppingList from './ShoppingList';

class UserShow extends Component {
    state = {
        users: {
            shoppingList: []
        }
    }

    showUser = () => {
        const userId = this.props.match.params.id
        
        axios.get(`/api/users/${userId}`)
            .then(res => {
                this.setState({
                    users: res.data.users
                })
            })
    }


    componentDidMount() {
        this.showUser()
    }

    render() {
        const user = this.state.users
        return (
            <div>
               <h1>{user.userName}</h1>
               <img src={user.img} alt={user.userName} />
                <ShoppingList lists={user.shoppingList} />
            </div>
        );
    }
}

export default UserShow;