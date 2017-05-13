var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  name: String,
  password: String,
  notes: [{ body: String, date: Date }],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
