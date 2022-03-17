const getDevices = require('../controllers/DeviceController');
const express = require('express');
const router = express.Router();

router.get('/getDevices', getDevices);

module.exports = router;
