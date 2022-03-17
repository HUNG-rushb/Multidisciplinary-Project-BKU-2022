const axios = require('axios');
// const Test = require('../models/Test');
const Device = require('../models/Device');

const getData = async (limit) => {
  try {
    const devices = await Device.find();
    devices.map(async (device) => {
      const resData = await axios.get(
        `https://io.adafruit.com/api/v2/andrewquang/feeds/${device.key}/data?limit=${limit}`
      );

      resData.data.map((eachData) => {
        const { id, value, created_at } = eachData;
        const newData = { id, value, created_at };
        console.log(!device.data.includes(newData));
        if (!device.data.includes(newData)) {
          device.data.push(newData);
        }
      });
      await device.save();
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getData;
