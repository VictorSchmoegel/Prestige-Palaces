const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/verifyUser.js');
const { createListing } = require('../controller/listingController.js');

router.post('/create', verifyToken, createListing);

module.exports = router;