const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/verifyUser.js');
const { createListing, deleteListing } = require('../controller/listingController.js');

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);

module.exports = router;