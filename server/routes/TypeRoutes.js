const { getTypes, getTypeById } = require('../controllers/TypeController');
const express = require('express');
const router = express.Router();

router.get('/getTypes', getTypes);
router.get('/getType/:type_id', getTypeById);

module.exports = router;
