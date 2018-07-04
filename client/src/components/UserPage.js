import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'


const AllUsers = styled.div`
display: flex;
align-content: center;
justify-content: space-around;
flex-flow: row wrap;
padding: 75px;
margin: auto;
img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
}




`
const SingleUserWrap = styled.div`
padding: 10px;
border: 1px solid black;
width: 22vw;

Button:hover{
  background-color: #1E90FF
  cursor: pointer;
}
`


class UserPage extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users')
      .then((res) => {
        this.setState({ users: res.data.users })
      })
  }
  render() {

    return (
      <center>
        <AllUsers>

          {this.state.users.map((user) => {
            return (
              <SingleUserWrap key={user._id}>
                <div>
                  <img src={user.img} alt={user.userName} />
                </div>
                <div>
                  <Link to={`/users/${user._id}`}><Button>View {user.userName}'s' Profile</Button></Link>
                </div>
              </SingleUserWrap>
            )
          })}
        </AllUsers>
      </center>
    )
  }
}


export default UserPage;