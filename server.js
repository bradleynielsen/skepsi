// Modules
const express = require(`express`)
const app = express()
const bodyParser = require('body-parser')
const path = require(`path`)
const morgan = require('morgan')
const mongoose = require('mongoose')
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ````````````````````replace these with an index file
const post = require(`./controllers/post`)
const user = require(`./controllers/user`)
const Promise = require('bluebird')
mongoose.Promise = Promise
const  {mongoURI, port, stripeKey, host} = require('./config')

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan(`dev`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(`/post`, post)
app.use(`/user`, user)

// ===============================================
//        DATABASE CONFIGURATION
// ===============================================

// // local MongoDB
// const mongoURI = 'mongodb://localhost/skepsidb'

// const mongoURI = 'mongodb://<dbuser>:<dbpassword>@ds145659.mlab.com:45659/heroku_qmbxwpsd'
// this executes if the app is executed on Heroku
if (process.env.MONGODB_URI) {
  console.log('Connecting to ', process.env.MONGODB_URI)
  mongoose.connect(process.env.MONGODB_URI)
} // this executes if the app is executed on local machine
else {
  console.log('Connecting to ', mongoURI)
  mongoose.connect(mongoURI)
}

// ===============================================
//                   Routes
// ===============================================
app.get(`*`, function (req, res) {
  res.sendFile('public/index.html', { root: __dirname })
})

// Connection to PORT
app.listen(port, function () {
  console.log(`Listening On Port: ${port}`)
})

// ===============================================
//           Mongoose connection
// ===============================================
const db = mongoose.connection
// Show any mongoose errors
db.on('error', function (error) {
  console.log('Mongoose Error: ', error)
})

// Once logged in to the db through mongoose, log a success message
db.once('open', function () {
  console.log('Mongoose connection successful.')
})

//
// //initilize the db
// const UserSchema = require(`./models/user.js`);
// const initUser = new UserSchema.User({name: 'init user', password: 'admin', notes:{body: "test body of init user note"})
//
//
//  skepsi.user.insert(initUser)
// .then(function(mongooseDocuments) {
//   console.log(mongooseDocuments);
// }).catch(function(err) {
//   console.log("Error inserting collections.")
// });
