const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middlewares/verifyUser.js');
const { createListing, deleteListing, updateListing, getListing, getAllListings } = require('../controller/listingController.js');

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getAllListings);

module.exports = router;