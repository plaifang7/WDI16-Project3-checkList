import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Button from 'react-bootstrap'

const AllUsers = styled.div`
padding: 75px;
img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
`
const SingleUserWrap = styled.div`
padding: 10px;
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