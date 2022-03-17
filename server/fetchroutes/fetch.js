const config = require('config');
const io_key = config.get('io_key');
const setIOkey = require('../ultis/setIOKey');
// const getTest = require('./testfetch');
const getDevices = require('./getDevices');

setIOkey(io_key);

// Fetch api from Adafruit at Interval of 5 seconds
const fetchInterval = setInterval(() => {
  //   getTest();
  getDevices();
}, 5000);

module.exports = fetchInterval;
