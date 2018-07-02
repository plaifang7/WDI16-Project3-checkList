import React, { Component } from 'react';
import axios from 'axios'

class ShoppingList extends Component {
  state = {
    shoppingList: {},
    items: [],
    newItem: true,
    itemName: '',
    img: '',


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

  toggleNewItem = () => {
    const newShopItem = !this.state.newItem
    this.setState({ newItem: newShopItem })
  }

  deleteList = (listId) => {
    const userId = this.props.match.params.userId
    console.log(userId)

    axios.delete(`/api/users/${userId}/list/${listId}`)
      .then(res => {
        this.props.history.push(`/users/${userId}`)
      })
  }

  deleteItem = (itemId) => {
    const userId = this.props.match.params.userId
    const listId = this.props.match.params.listId

    axios.delete(`/api/users/${userId}/list/${listId}/items/${itemId}`)
      .then(res => {
        window.location.reload()
      })

  }

  handleChange = (event) => {
    
  }


  render() {
    return (
      <div>

        <h1>{this.state.shoppingList.listName}</h1>
        <div>
          <button onClick={this.deleteList}>Delete List</button>
        </div>

        {this.state.items.map((item) => {
          return (
            <div key={item._id}>
              <p>{item.itemName}</p>
              <img src={item.img} alt={item.itemName} />
              <button>✓</button>
              <button onClick={() => this.deleteItem(item._id)}>Delete Item</button>
            </div>
          )
        })}
        <div>
          <button onClick={this.toggleNewItem}>
            {this.state.newItem ? "Hide" : "Add Item"}
          </button>
          {this.state.newItem ?
            <div>
              <h1>Add an Item</h1>
              <form>
                <input
                  placeholder="Item Name"
                  type="text"
                  name="itemName"
                  value={this.state.itemName}
                  onChange={this.handleChange}
                />
                <br />
                <input
                  placeholder="Image URL"
                  type="text"
                  name="img"
                  value={this.state.img}
                  onChange={this.handleChange}
                />
                <br />
              </form>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

export default ShoppingList;