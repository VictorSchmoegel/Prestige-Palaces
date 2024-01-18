const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/verifyUser');
const { createListing } = require('../controller/listingController');

router.post('/create', verifyToken, createListing);

module.exports = router;