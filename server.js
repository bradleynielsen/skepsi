// Modules
var express = require(`express`);
var bodyParser = require("body-parser");
var path = require(`path`);
var logger = require("morgan");
var mongoose = require("mongoose");
// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");


// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// MONGOOSE DATABASE CONFIGURATION
// ===============================================
// local MongoDB
const databaseuri = 'mongodb://localhost/skepsidb';

// this executes if the app is executed on Heroku
if (process.env.MONGODB_URI) {
    console.log('Connection to ', process.env.MONGODB_URI)
    mongoose.connect(process.env.MONGODB_URI);
} // this executes if the app is executed on local machine
else {
    console.log('Connecting to ', databaseuri)
    mongoose.connect(databaseuri);
}

// Routes
app.get(`*`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});


var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
