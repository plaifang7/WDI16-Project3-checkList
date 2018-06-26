var express = require('express');
var router = express.Router();
const { UserModel } = require('../db/schema')

/* GET users listing. */
router.get('/', function (req, res, next) {
  UserModel.find()
    .then((users) => {
      res.send({ users })
    })
});

router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .then((user) => {
      res.send({ user })
    })
})

router.post('/', (req, res) => {
  const newUser = UserModel(req.body)
  newUser.save()
    .then((user) => {
      res.send(user)
    })

})

router.patch('/:id', (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      res.send({ user })
    })
})

router.delete('/:id', (req,res) => {
  UserModel.findByIdAndRemove(req.params.id)
  .then((user) => {
   res.send('You deleted your profile!!')
  })
})



module.exports = router;
