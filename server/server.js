const { createServer } = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');

const express = require('./config/express.js');
const connectDB = require('./config/db');
const connection = require('./config/connection');

// Setting path
const PORT = process.env.PORT || 5000;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.of('/api/socket').on('connection', (socket) => {
  console.log('socket.io: User connected: ', socket.id);

  socket.on('disconnect', () => {
    console.log('socket.io: User disconnected: ', socket.id);
  });
});

httpServer.listen(PORT, () =>
  console.log(`Server now running on port ${PORT}!`)
);

connectDB();

connection;
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
