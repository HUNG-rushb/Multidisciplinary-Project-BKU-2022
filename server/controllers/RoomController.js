const Room = require('../models/Room');
const { check, validationResult } = require('express-validator');

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

const getDevicesByRoomId = async (req, res) => {
  try {
    const room = await Room.findOne({ room_id: req.params.room_id }).populate(
      'devices',
      ['device_id', 'key', 'name', 'description']
    );

    return res.json(room.devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addRoom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, description } = req.body;
  try {
    const room = await Room.findOne({ room_id: req.params.room_id }).populate(
      'devices',
      ['device_id', 'key', 'name', 'description']
    );

    return res.json(room.devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getRooms, getRoomById, getDevicesByRoomId, addRoom };
