const config = require('config');
const io_key = config.get('io_key');
const setIOkey = require('../ultis/setIOKey');
// const getTest = require('./testfetch');
const getRooms = require('./getRooms');
const getTypes = require('./getTypes');
const getDevices = require('./getDevices');
const addDevices = require('./addDevices');

// ! if the Adafruit is set to public we dont need to setIOkey
setIOkey(io_key);

// Fetch api from Adafruit at Interval of 5 seconds
// const fetchInterval = setInterval(() => {
//   // getTest();
//   getDevices();
//   getData(5);
// }, 5000);

const fetch = async () => {
  // getData(1);
  var startTime = performance.now();
  await getDevices();
  await getRooms();
  await getTypes();
  await addDevices();
  var endTime = performance.now();
  console.log(`${endTime - startTime} milliseconds`);
};
module.exports = fetch;
