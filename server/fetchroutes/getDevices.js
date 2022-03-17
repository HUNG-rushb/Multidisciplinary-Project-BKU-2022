const axios = require('axios');
// const Test = require('../models/Test');
const Device = require('../models/Device');

const getDevices = async () => {
  try {
    const res = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds'
    );

    res.data.map(async (each) => {
      const { id, name, description, username } = each;
      const device = await Device.find({ key: id });
      if (device.length === 0) {
        const newDevice = new Device({
          key: id,
          name: name,
          description: description == null ? '' : description,
          username: username,
        });
        const res = await newDevice.save();
      }
    });
    // const test = await Test.create({
    //   name: response.data[0].feed_key,
    //   description: response.data[0].value,
    // });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getDevices;
