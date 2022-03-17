const Device = require('../models/Device');

const getDevices = async (req, res) => {
  try {
    const devices = await Device.find().select('-_id -__v');

    return res.json({
      success: true,
      message: devices,
    });
  } catch (error) {
    console.log('Error with fetching devices: ', error);
    return res.json({
      success: false,
      message: 'Error with fetching devices. See server console for more info.',
    });
  }
};

module.exports = getDevices;
