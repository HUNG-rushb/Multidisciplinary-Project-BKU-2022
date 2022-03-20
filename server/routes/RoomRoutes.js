const express = require('express');
const { check } = require('express-validator');
const {
  getRooms,
  getRoomById,
  getDevicesByRoomId,
  addRoom,
  updateRoom,
} = require('../controllers/RoomController');
const router = express.Router();

router.get('/rooms', getRooms);
router.get('/room/:room_id', getRoomById);
router.get('/room/:room_id/devices', getDevicesByRoomId);
router.post(
  '/room',
  [check('group_name', 'Group name is required').not().isEmpty()],
  addRoom
);
router.put('/room/:room_id', updateRoom);

module.exports = router;

// add Data
// put Room // xong
//  add Type? khong lam
//  put Type? khong lam
// add Device // xong
//  put Device
//  delete Room
// delete Device
// delete Data ? khong lam
// return {
//  "data": ["32","23",""]
// }
