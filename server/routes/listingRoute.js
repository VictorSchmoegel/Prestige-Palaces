const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/verifyUser.js');
const { createListing, deleteListing, updateListing } = require('../controller/listingController.js');

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);

module.exports = router;