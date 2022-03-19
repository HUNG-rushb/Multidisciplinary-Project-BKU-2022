const {
  getDevices,
  getDeviceById,
} = require('../controllers/DeviceController');
const express = require('express');
const router = express.Router();

router.get('/getDevices', getDevices);
router.get('/getDevice/:device_id', getDeviceById);

module.exports = router;
