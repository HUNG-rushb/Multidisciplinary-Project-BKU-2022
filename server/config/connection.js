const mongoose = require('mongoose');

const fetch = require('../fetchroutes/fetch');

const connection = mongoose.connection;

connection.once('open', () => {
  // Fetch api from Adafruit at Interval of 5 seconds
  fetch();

  console.log('MongoDB database connected');

  console.log('Setting change streams');

  const DeviceChangeStream = connection.collection('devices').watch();

  DeviceChangeStream.on('change', (change) => {
    switch (change.operationType) {
      case 'insert':
        const device = {
          _id: change.fullDocument._id,
          key: change.fullDocument.key,
          name: change.fullDocument.name,
          description: change.fullDocument.description,
          data: change.fullDocument.data,
        };
        io.of('/api/socket').emit('newTest', device);
        break;

      case 'update':
        const updateFields = change.updateDescription.updatedFields;
        const updateData = updateFields.data;
        io.of('/api/socket').emit('updateTest', updateData);
        break;
      // case 'delete':
      //   io.of('/api/socket').emit('deletedTest', change.documentKey._id);
      //   break;
    }
  });
});

connection.on('error', (error) => console.log('Error: ' + error));

module.exports = connection;
