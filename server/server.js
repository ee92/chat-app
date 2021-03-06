const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const pubpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(pubpath));

io.on('connect', (socket) => {
  console.log('new user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
});

server.listen(port, () => {
  console.log('server up on port ' + port);
});
