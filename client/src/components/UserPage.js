import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const AllUsers = styled.div`
padding: 75px;
img{
  width: 250px;
  height: 250px;
  border-radius: 50%;
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
            <div key={user._id}>
              <div>
                <img src={user.img} alt={user.userName} />
              </div>
              <div>
                <Link to={`/users/${user._id}`}><button>View {user.userName}'s' Profile</button></Link>
              </div>
            </div>
          )
        })}
      </AllUsers>
      </center>
    )
  }
}


export default UserPage;