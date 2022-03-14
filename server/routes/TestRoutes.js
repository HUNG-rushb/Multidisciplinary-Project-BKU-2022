const { addTest, getTests } = require('../controllers/TestController');
const express = require('express');
const router = express.Router();

router.post('/addTest', addTest);
router.get('/getTest', getTests);

module.exports = router;
