const axios = require('axios');
const Test = require('../models/Test');
const time = new Date();

const getData = async () => {
  try {
    const response = await axios.get(
      'https://io.adafruit.com/api/v2/andrewquang/feeds/test/data'
    );
    // const res = Object(response);
    // console.log(res[0]);
    // response.map((each) => {
    //   console.log(each);
    // });
    const test = await Test.create({
      name: response.data[0].feed_key,
      description: response.data[0].value,
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getDataInterval = setInterval(() => {
  getData();
}, 1000);

module.exports = getDataInterval;
