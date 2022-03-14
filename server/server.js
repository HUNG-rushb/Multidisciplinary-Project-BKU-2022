const express = require('./config/express.js');
const connectDB = require('./config/db');
const { createServer } = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
// const path = require('path');

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

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connected');

  console.log('Setting change streams');
  const thoughtChangeStream = connection.collection('thoughts').watch();

  thoughtChangeStream.on('change', (change) => {
    switch (change.operationType) {
      case 'insert':
        const thought = {
          _id: change.fullDocument._id,
          name: change.fullDocument.name,
          description: change.fullDocument.description,
        };

        io.of('/api/socket').emit('newThought', thought);
        break;

      case 'delete':
        io.of('/api/socket').emit('deletedThought', change.documentKey._id);
        break;
    }
  });
});

connection.on('error', (error) => console.log('Error: ' + error));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
