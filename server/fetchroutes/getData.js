const axios = require('axios');
const e = require('cors');
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
        const newData = { data_id: id, value, created_at };

        if (device.data.length == 0) {
          device.data.unshift(newData);
        }

        if (device.data.filter((e) => e.data_id == id).length == 0) {
          device.data.unshift(newData);
        }
      });
      await device.save();
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getData;
