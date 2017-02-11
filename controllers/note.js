// CONTROLER

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = require('../models/note');


router.post('/', (req, res) => {
  console.log( "request body:" + req.body);
  res.send(req.body);
  var newNote = new Note(req.body);
  newNote.save((err, doc) => {
    if (err) {
      console.log("You got router errors bro")
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = Note;
