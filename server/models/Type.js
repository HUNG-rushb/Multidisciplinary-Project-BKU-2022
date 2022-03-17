const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
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

module.exports = Type = mongoose.model('type', TypeSchema);
