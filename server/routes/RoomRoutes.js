const express = require('express');
const { check, validationResult } = require('express-validator');
const {
  getRooms,
  getRoomById,
  getDevicesByRoomId,
  addRoom,
} = require('../controllers/RoomController');
const router = express.Router();

router.get('/rooms', getRooms);
router.get('/room/:room_id', getRoomById);
router.post(
  '/room',
  [check('group', 'Group is required').not().isEmpty()],
  addRoom
);

module.exports = router;
