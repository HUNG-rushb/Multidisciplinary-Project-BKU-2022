const { check } = require('express-validator');
const {
  getDevices,
  getDeviceById,
  addDevice,
  updateDevice,
} = require('../controllers/DeviceController');
const express = require('express');
const router = express.Router();

router.get('/devices', getDevices);
router.get('/device/:device_id', getDeviceById);
router.post(
  '/device',
  [
    check('room_name', 'Room name is required').not().isEmpty(),
    check('device_name', 'Device name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
  ],
  addDevice
);
router.put('/device/:device_id', updateDevice);
module.exports = router;
