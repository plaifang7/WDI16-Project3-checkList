import React, { Component } from 'react';

class NewList extends Component {
  state = {
    storeName: '',
    listDate: '',
    listName: ''
  }

  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value
    this.setState({
      [inputName]: userInput
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userId = this.props.match.params.userId
    axios.post(`/api/users/${userId}`)
    .then(res => {
      this.props.history.push(`/users/${res.data._id}`)
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Store Name"
            type="text"
            name="storeName"
            value={this.state.storeName}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Date"
            type="date"
            name="listDate"
            value={this.state.listDate}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="List Name"
            type="text"
            name="email"
            value={this.state.listName}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add List</button>
        </form>
      </div>
    );
  }
}

export default NewList;