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
          shoppingList: res.data.users.shoppingList,
          items: res.data.users.shoppingList.items
        })
        console.log(res.data.users.shoppingList)
      })
      .catch((err) => {
        console.error(err)
      })
  }


  render() {
    return (
      <div>
        hello
            </div>
    );
  }
}

export default ShoppingList;