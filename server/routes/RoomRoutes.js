const { getRooms, getRoomById } = require('../controllers/RoomController');
const express = require('express');
const router = express.Router();

router.get('/getRooms', getRooms);
router.get('/getRoom/:room_id', getRoomById);

module.exports = router;
