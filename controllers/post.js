var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/user')


router.post('/', (req, res) => {
  console.log(req.body)
  // var newNote = new Note(req.body)
  // post to user array of notes
  newNote.save((err, doc) => {
    if (err) {
      console.log('You got router errors bro')
      res.send(err)
    } else {
      res.send(doc)
    }
  })
})

module.exports = router
