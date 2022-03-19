const Room = require('../models/Room');

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().select('-_id -__v');

    return res.json(rooms);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await Room.findOne({ room_id: req.params.room_id });

    return res.json(room);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
module.exports = { getRooms, getRoomById };
