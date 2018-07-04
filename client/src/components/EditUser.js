import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios'
import styled from 'styled-components'


class EditUser extends Component {
  state = {
    userName: '',
    password: '',
    email: '',
    img: ''
}
handleChange = (event) => {
  //inputName is the target the user is hitting when they type in the form.
  const inputName = event.target.name
  const userInput = event.target.value
  this.setState({
      [inputName]: userInput
  })
}

handleSubmit = (event) => {
  const userId = this.props.match.params.userId
  event.preventDefault()
  axios.patch(`/api/users/${userId}/edit`, this.state)
  .then((res) => {
  this.props.history.push(`/users/${userId}`)          
  })
}

    render() {
        return (
            <div>
              <h1>Edit Your Profile</h1>
              <center>
                <form onSubmit={this.handleSubmit}>
                <input
                        placeholder="E-mail"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="User Name"
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <input
                        placeholder="Image"
                        type="text"
                        name="img"
                        value={this.state.img}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <Button type="submit">Update User</Button>
                </form>
                </center>
            </div>
        );
    }
}

export default EditUser;