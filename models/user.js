var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  name:{type: String, required: [true, 'Must provide your name,']},
  password: {type: String, required: [true, 'Must provide a password.']},
  notes: [{
    title: String,
    body: String,m
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
