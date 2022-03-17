const config = require('config');
const io_key = config.get('io_key');
const setIOkey = require('../ultis/setIOKey');
// const getTest = require('./testfetch');
const getDevices = require('./getDevices');
const getData = require('./getData');

// ! if the Adafruit is set to public we dont need to setIOkey
// setIOkey(io_key);

// Fetch api from Adafruit at Interval of 5 seconds
const fetchInterval = setInterval(() => {
  // getTest();
  console.log('interval');
  getDevices(5);
  getData(5);
}, 5000);

// const fetch = () => {
//   getDevices(5);
// };
module.exports = fetchInterval;
