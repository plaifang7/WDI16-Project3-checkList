let express = require('express')
let router = express.Router({mergeParams: true})
const { UserModel, ItemModel } = require('../db/schema')

//Get List Index Route
router.get('/:id', (req,res) =>{
    UserModel.findById(req.params.id)
    .then((user) => {
        const items = user.shoppingList.id(req.params.listId)
        res.send({items})
    })
})



router.post('/', (req,res) => {
    UserModel.findById(req.params.userId)
    .then((user) => {
        const newItem = new ItemModel(req.body)
        user.shoppingList.id(req.params.listId).items.push(newItem)
        return user.save()
    })
    .then((savedItem) => {
        res.send({user: savedItem})
    })
})

router.delete('/:id', (req,res) => {
    ItemModel.findByIdAndRemove(req.params.id)
    .then(() => {
        res.send('Deleted the item')
    })
})


module.exports = router