import React, { Component } from 'react';
import axios from 'axios'
import ShoppingList from './ShoppingList';

class UserShow extends Component {
state = {
    users: {
        shoppingList: []
    }
    
    
}

    componentDidMount() {
        const userId = this.props.match.params.id
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                console.log(res)
                this.setState({
                    users: res.data.users
                })
            })
    }

    render() {
        return (
            <div>
                hello
               <h1>{this.state.users.userName}</h1> 
               <ShoppingList lists={this.state.users.shoppingList} />
            </div>
        );
    }
}

export default UserShow;