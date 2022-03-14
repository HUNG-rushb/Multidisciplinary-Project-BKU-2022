const express = require('express')();
const cors = require('cors');
const http = require('http').createServer(express);
const io = require('socket.io')(http);
const connectDB = require('./config/db');
const Test = require('./models/TestModel');
connectDB();

express.use(cors());
const PORT = process.env.PORT || 5000;
const changeStream = Test.watch();

changeStream.on('change', (change) => {
  console.log(change);
  io.emit('changeData', change);
});

io.on('connection', function () {
  console.log('connected');
});

http.listen(3000, async () => {
  try {
    console.log('Listening on port :%s...', http.address().port);
  } catch (e) {
    console.error(e);
  }
});
