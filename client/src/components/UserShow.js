import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const UserProf = styled.div`
Button{
  margin: 10px;
}
Button:hover{
  background-color: #1E90FF
  cursor: pointer;
}
Button:focus{
  outline: none;
}
img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
background-position: center;
height: 100vh;
background-size: cover;
background-image: url('https://www.dailydot.com/wp-content/uploads/2d8/f6/7a1eebe44b53aef6c7f7d2dbb4d35686.jpg')
`
const ShopListWrap = styled.div`
border: 1px solid black;
width: 40vw
margin: 10px auto;
background-color: white;

`
const AddList = styled.div`
border: 1px solid black;
background-color: white;
width: 20vw
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
            <Button onClick={this.deleteUser}>Delete User</Button>
          <br />
          <img src={this.state.users.img} alt={this.state.users.userName} />
          <AddList>
            <Link to={`/users/${userId}/list/new`}>+Add List</Link>
          </AddList>
          {this.state.shoppingList.map((list) => {
            return (
              <ShopListWrap key={list._id}>
                <p>List Name: {list.listName}</p>
                <p>Store Name: {list.storeName}</p>
                <Link to={`/users/${userId}/list/${list._id}`}><Button>View List</Button></Link>
                <Button onClick={() => this.deleteList(list._id)}>Delete List</Button>
              </ShopListWrap>
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