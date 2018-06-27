import React, { Component } from 'react';

class LoginPage extends Component {
    state = {
        userName: '',


    }
    render() {
        return (
            <div>
               <h1>Create A User</h1>
               <form>
                   <input
                   placeholder="User Name"
                   type="text"
                   name="userName"
                   value={this.state.userName}
                   
                   />
                   <input/>
               </form>
            </div>
        );
    }
}

export default LoginPage;