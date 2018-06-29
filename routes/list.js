let express = require('express')
let router = express.Router({ mergeParams: true })
const { UserModel, ListModel } = require('../db/schema')

// Show List 
router.get('/:id', (req, res) => {
  UserModel.findById(req.params.userId)
    .then((users) => {
      const lists = users.shoppingList
      res.send({
        lists,
        users
      })
    })
})

//Create New List
router.post('/new', (req, res) => {
  UserModel.findById(req.params.userId)
    .then((user) => {
      const newList = new ListModel(req.body)
      user.shoppingList.push(newList)
      return user.save()
    })
    .then((savedList) => {
      res.send({ user: savedList })
    })
})

//Delete Route
router.delete('/:id', (req, res) => {
  UserModel.findById(req.params.userId)
    .then((user) => {
      user.shoppingList.id(req.params.id).remove()
      return user.save()
    })
    .then((savedUser) => {
      res.send({ user: savedUser })
    })
})

module.exports = router


