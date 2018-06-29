import React, { Component } from 'react';

class NewList extends Component {
  state = {
    storeName: '',
    listDate: '',
    listName: ''
  }
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <input
            placeholder="First Name"
            type="text"
            name="storeName"
            value={this.state.storeName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            type="text"
            name="listDate"
            value={this.state.listDate}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="E-mail"
            type="text"
            name="email"
            value={this.state.listName}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewList;