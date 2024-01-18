const express = require('express');
const router = express.Router();

const { test } = require('../controller/listingController');

router.post('/test', test);

module.exports = router;