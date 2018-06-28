import React, { Component } from 'react';
import axios from 'axios'

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
            <div>
                <h1>Create A User</h1>
                <form onSubmit={this.handleSubmit}>
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
                        type="text"
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;