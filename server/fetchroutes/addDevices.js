const axios = require('axios');
const Room = require('../models/Room');
const Type = require('../models/Type');
const Device = require('../models/Device');

const addDevices = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/groups'
    );

    const responseRoomsTypes = response.data;

    responseRoomsTypes.map(async (eachRoomType) => {
      eachRoomType.feeds.map(async (feed) => {
        const device = await Device.findOne({ device_id: feed.id });

        const devicesinRoom = await Room.find({ devices: device._id });
        if (devicesinRoom.length == 0) {
          await Room.findOneAndUpdate(
            { room_id: eachRoomType.id },
            { $push: { devices: device._id } }
          );
        }

        const devicesinType = await Type.find({ devices: device._id });
        if (devicesinType.length == 0) {
          await Type.findOneAndUpdate(
            { type_id: eachRoomType.id },
            { $push: { devices: device._id } }
          );
        }
      });
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = addDevices;
