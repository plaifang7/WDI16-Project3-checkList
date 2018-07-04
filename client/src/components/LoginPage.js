import React, { Component } from 'react';
import { Button, Form, FormGroup, ControlLabel, Col, FormControl, Checkbox } from 'react-bootstrap'
import axios from 'axios'
import styled from 'styled-components'

const LogInWrap = styled.div`
margin: 71px auto auto auto;
background-color: #1E90FF;
height: 100vh
`
const LogInForm = styled.div`
width: 30vw;
`

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
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
    event.preventDefault()
    axios.post('/api/users', this.state)
      .then((res) => {
        this.props.history.push(`/users/${res.data._id}`)
      })
  }
  render() {
    return (
      <center>
        <LogInWrap>
          <LogInForm>
            <h2>Log In</h2>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
    </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
    </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={7}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
          </LogInForm>
          <div>
            <h2>Create A User</h2>
            <Form onSubmit={this.handleSubmit}>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <br />
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <br />
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
              <br />
              <input
                placeholder="Image"
                type="text"
                name="img"
                value={this.state.img}
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        </LogInWrap>
      </center>
    );
  }
}

export default LoginPage;