// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//imports reverseString from util
var util = require('./util');
var reverseString = util.reverseString;
//imports body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.text());

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

// Starts the server on port 3000!
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
