const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
// const User = require('../../models/User');
// const jwt = require('jsonwebtoken');
const config = require('config');
const axios = require('axios');
const { check, validationResult } = require('express-validator');

// router.get('/', async (req, res) => {
//   try {
// const response = await axios({
//   url: 'https://io.adafruit.com/api/v2/andrewquang/feeds/test/data',
//   method: 'get',
// });
//     res.status(200).json(response.data);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      url: 'https://io.adafruit.com/api/v2/andrewquang/feeds/test/data',
      method: 'get',
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
