const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: 'rooms',
  },
  key: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  username: {
    type: String,
  },
  data: [
    {
      data_id: {
        type: String,
      },
      value: {
        type: String,
      },
      created_at: {
        type: Date,
      },
    },
  ],
});

module.exports = Device = mongoose.model('devices', DeviceSchema);
