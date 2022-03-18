const axios = require('axios');
// const Test = require('../models/Test');
const Device = require('../models/Device');

const getDevices = async () => {
  try {
    const resDevices = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds'
    );

    resDevices.data.map(async (each) => {
      const { key, name, description, username } = each;
      const devices = await Device.find({ key: key });
      if (devices.length === 0) {
        const newDevice = new Device({
          key: key,
          name: name,
          description: description == null ? '' : description,
          username: username,
        });
        await newDevice.save();
      }
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getDevices;
