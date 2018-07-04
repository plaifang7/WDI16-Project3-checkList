import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import axios from 'axios'
import styled from 'styled-components'

const NewListWrap = styled.div`
padding: 120px
height: 100vh
background-color: #1E90FF;
`
const ListFormWrap = styled.div`
width: 33vw;
border-radius: 10px;
border: 1px solid black
background-color: rgb(255, 208, 42);
`

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
    axios.post(`/api/users/${userId}/list/new`, this.state)
      .then(res => {
        this.props.history.push(`/users/${userId}`)
      })
  }

  render() {
    return (
      <center>
        <NewListWrap>
          <ListFormWrap>
            <h1>New Shopping List</h1>
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
                name="listName"
                value={this.state.listName}
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit">Add List</Button>
            </form>
          </ListFormWrap>
        </NewListWrap>
      </center>
    );
  }
}

export default NewList;