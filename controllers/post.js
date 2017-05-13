var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/user')

router.post('/', (req, res) => {
  console.log(req.body)
  res.send(req.body)
  var newUser = new User(req.body)
  newUser.save((err, doc) => {
    if (err) {
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

module.exports = router
