const {
  getDevices,
  getDeviceById,
} = require('../controllers/DeviceController');
const express = require('express');
const router = express.Router();

router.get('/devices', getDevices);
router.get('/device/:device_id', getDeviceById);

module.exports = router;
