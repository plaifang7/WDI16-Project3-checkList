import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShoppingList from './ShoppingList';

class UserShow extends Component {
  state = {
    users: [],
    shoppingList: []

  }

  componentDidMount() {
    const userId = this.props.match.params.userId

    axios.get(`/api/users/${userId}`)
      .then((res) => {
        console.log(res)
        this.setState({
          users: res.data.users,
          shoppingList: res.data.users.shoppingList
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }


  deleteUser = () => {
    const userId = this.state.users._id

    axios.delete(`/api/users/${userId}`)
      .then(res => {
        this.props.history.push('/users')
      })
  }

  



  render() {
    const userId = this.state.users._id
    return (
      <div>
        <h1>{this.state.users.userName}'s Profile</h1>
        <Link to={`/users/${userId}/edit`}><button>Edit Profile</button></Link>
        <br />
        <img src={this.state.users.img} alt={this.state.users.userName} />

        {this.state.shoppingList.map((list) => {
          return (
            <div key={list._id}>
              <p>{list.listName}</p>
              <p>{list.storeName}</p>
            </div>
          )
        })}
        <div>
          <button onClick={this.deleteUser}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default UserShow;