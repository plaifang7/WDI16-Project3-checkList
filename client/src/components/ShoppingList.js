import React, { Component } from 'react';
import axios from 'axios'

class ShoppingList extends Component {
  state = {
    shoppingList: {},
    items: []

  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    const listId = this.props.match.params.listId


    axios.get(`/api/users/${userId}/list/${listId}`)
      .then(res => {
        this.setState({
          shoppingList: res.data.list,
          items: res.data.list.items

        })
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  deleteList = (listId) => {
    const userId = this.props.match.params.userId
    console.log(userId)

    axios.delete(`/api/users/${userId}/list/${listId}`)
      .then(res => {
        this.props.history.push(`/users/${userId}`)
      })
  }

  deleteItem = (item) => {
    const userId = this.props.match.params.userId
    const listId = this.props.match.params._id
    const itemId = item._id

    axios.delete(`/api/users/${userId}/list/${listId}/items/${itemId}`)
      .then(res => {
        this.props.history.push(`/users/${userId}/list/${itemId}`)
      })

  }


  render() {
    return (
      <div>
        
        <h1>{this.state.shoppingList.listName}</h1>
        <div>
          <button onClick={this.deleteList}>Delete List</button>
        </div>
          {this.state.items.map((item) => {
            return(
              <div key={item._id}>
              <p>{item.itemName}</p>
              <img src={item.img} alt={item.itemName}/>
              <button>✓</button>
              <button onClick={() => this.deleteItem(item._id)}>Delete Item</button>
              </div>
            )
          })}
      </div>
    );
  }
}

export default ShoppingList;