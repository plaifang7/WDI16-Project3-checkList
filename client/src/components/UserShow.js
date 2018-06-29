import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


class UserShow extends Component {
  state = {
    users: {},
    shoppingList: []

  }

  componentDidMount() {
    const userId = this.props.match.params.userId

    axios.get(`/api/users/${userId}`)
      .then((res) => {
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
    const userId = this.props.match.params.userId
    console.log(userId)

    axios.delete(`/api/users/${userId}`)
      .then(res => {
        this.props.history.push('/users')
      })
  }

  deleteList = (listId) => {
    const userId = this.props.match.params.userId
    console.log(userId)

    axios.delete(`/api/users/${userId}/list/${listId}`)
    .then(res => {
      this.setState({
        users: res.data.users,
        shoppingList: res.data.shoppingList
      })
    })
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
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
        <div>
          <Link to="">+Add List</Link>
        </div>
        {this.state.shoppingList.map((list) => {
          return (
            <div key={list._id}>
              <p>{list.listName}</p>
              <p>{list.storeName}</p>
              <Link to={`/users/${userId}/list/${list._id}`}><button>View List</button></Link>
              <button onClick={() => this.deleteList(list._id)}>Delete List</button>
            </div>
          )
        })}
        <div>
          <button onClick={this.deleteUser}>Delete User</button>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default UserShow;