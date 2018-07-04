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

height: 100vh;
background-size: cover;
background-image: url('https://idsb.tmgrup.com.tr/2015/12/15/HaberDetay/1450123753272.jpg')
@media(max-width: 500px){
  flex-flow: column wrap;
  width: 100vw;
}
`

const SingleUserWrap = styled.div`
padding: 2px 10px;
border: 4px solid #1E90FF;
width: 22vw;
height: 50vh;
background-color: rgb(255, 208, 42);
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
Button{
  margin: 10px;
}
Button:hover{
  background-color: #1E90FF;
  cursor: pointer;
}
Button:focus{
  outline: none;
}
@media(max-width: 500px){
  width: 70vw;
  height: 44vh;
  margin: 25px;
  padding: 10px;
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