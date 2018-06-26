const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    itemName: {
        type: 'String',
        required: true,
    },
    img: {
        type: 'String'
    },
    checkedItem: false
})

const ShopppingListSchema = new Schema({
    storeName: {
        type: 'String'
    },
    listDate: {
        type: Date
    },
    listName: {
        type: 'String',
        required: true
    },
    items: [ItemSchema]
})

const UserSchema = new Schema({
    userName: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required: true
    },
    firstName: {
        type: 'String',
        required: true
    },
    lastName: {
        type: 'String',
        required: true
    },
    img: 'String',
    shoppingList: [ShopppingListSchema]
})

const UserModel = mongoose.model('User', UserSchema)
const ListModel = mongoose.model('List', ShopppingListSchema)
const ItemModel = mongoose.model('Item', ItemSchema)

module.exports = {
    UserModel,
    ListModel,
    ItemModel
}