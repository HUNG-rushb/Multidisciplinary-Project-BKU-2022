const axios = require('axios');
const Device = require('../models/Device');
const Room = require('../models/Room');
const { check, validationResult } = require('express-validator');

const getDevices = async (req, res) => {
  try {
    const devices = await Device.find();

    return res.json(devices);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const getDeviceById = async (req, res) => {
  try {
    const device = await Device.findOne({ device_id: req.params.device_id });
    if (!device) {
      return res.status(400).json({ errors: [{ msg: 'Device not found' }] });
    }
    return res.json(device);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const addDevice = async (req, res) => {
  // const { feed } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { room_name, device_name, description } = req.body;
  try {
    const room = await Room.findOne({ name: room_name });
    if (!room) {
      return res.status(400).json({ errors: [{ msg: 'Room not found' }] });
    } else {
      const DeviceFields = {
        feed: {
          name: device_name,
          description: description,
        },
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .post(
          `https://io.adafruit.com/api/v2/andrewquang/feeds?group_key=${room.key}`,
          DeviceFields,
          config
        )
        .then(async (success) => {
          return res.json({ msg: ' New device has been added successfully' });
          // return res.status(200).send(success);
        })
        .catch((err) => {
          return res
            .status(400)
            .json({ errors: [{ msg: err.response.data.error }] });
        });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// ! Uncompleted
const updateDevice = async (req, res) => {
  const { group_name, description } = req.body;
  try {
    let room = await Room.findOne({ room_id: req.params.room_id });
    if (room) {
      const RoomFields = {
        name: group_name,
        description: description,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios
        .put(
          `https://io.adafruit.com/api/v2/andrewquang/groups/${room.key}`,
          RoomFields,
          config
        )
        .then(async (success) => {
          room = await Room.findOneAndUpdate(
            { room_id: req.params.room_id },
            { $set: RoomFields },
            { new: true }
          );
          return res.json(room);
          // return res.status(200).send(success);
        })
        .catch((err) => {
          return res.status(400).json({ msg: err.response.data.error });
        });
    } else {
      return res.status(400).json({ msg: 'This room is not existed' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
// getData
module.exports = { getDevices, getDeviceById, addDevice, updateDevice };
