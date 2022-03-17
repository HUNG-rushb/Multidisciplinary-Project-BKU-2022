const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  device: [
    {
      type: Schema.Types.ObjectId,
      ref: 'devices',
    },
  ],
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Room = mongoose.model('room', RoomSchema);
