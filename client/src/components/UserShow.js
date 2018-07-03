import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const UserProf = styled.div`
img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
`



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
        window.location.reload()
      })
  }




  render() {
    const userId = this.state.users._id || ''
    return (
      <center>
        <UserProf>

          <h1>{this.state.users.userName}'s Profile</h1>
          <Link to={`/users/${userId}/edit`}><Button>Edit Profile</Button></Link>
          <div>
            <Button onClick={this.deleteUser}>Delete User</Button>
          </div>
          <br />
          <img src={this.state.users.img} alt={this.state.users.userName} />
          <div>
            <Link to={`/users/${userId}/list/new`}>+Add List</Link>
          </div>
          {this.state.shoppingList.map((list) => {
            return (
              <div key={list._id}>
                <p>{list.listName}</p>
                <p>{list.storeName}</p>
                <Link to={`/users/${userId}/list/${list._id}`}><button>View List</button></Link>
                <Button onClick={() => this.deleteList(list._id)}>Delete List</Button>
              </div>
            )
          })}

          <div>

          </div>

        </UserProf>
      </center>
    );
  }
}

export default UserShow;