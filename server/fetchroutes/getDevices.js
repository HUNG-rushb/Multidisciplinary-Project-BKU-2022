const axios = require('axios');
// const Test = require('../models/Test');
const Device = require('../models/Device');

const addDeviceToRoom = (RoomId, Device) => {
  return Room.findByIdAndUpdate(RoomId, { $push: { devices: Device._id } });
};
const addDeviceToType = (TypeId, Device) => {
  return Type.findByIdAndUpdate(TypeId, { $push: { devices: Device._id } });
};

const getDevices = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds'
    );

    const responseDevices = response.data;

    let tempDevices = [];

    responseDevices.map(async (eachDevice) => {
      const { id, key, name, description, username } = eachDevice;
      const devices = await Device.find({ device_id: id });

      if (devices.length === 0 && !tempDevices.includes(id)) {
        tempDevices.unshift(id);
        const groups = eachDevice.groups.map(({ user_id, ...rest }) => rest);
        const newDevice = new Device({
          device_id: id,
          key: key,
          name: name,
          description: description == null ? '' : description,
          username: username,
          group: groups,
        });
        await newDevice.save();
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getDevices;
