const Device = require('../models/Device');

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

    return res.json(device);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getDevices, getDeviceById };
