const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));



http.listen(78785, function() {
  console.log('Listening on port 78785');
})


// Handle a new connection
io.on('connection', function(socket) {
  socket.on('new circle', function(newCircle) {


  socket.on('new circle', function(clientCircle) {
    io.emit('new circle', clientCircle)
  })
  
})