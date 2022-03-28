// import fetch from "node-fetch";
// fetch("https://bku-ces-iotsmarthouse.herokuapp.com/api/devices")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// import axios from "axios";
const axios = require("axios");

// Make a request for a user with a given ID
axios
  //   .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/devices")
  .get("https://bku-ces-iotsmarthouse.herokuapp.com/api/device/1837824/data")
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
