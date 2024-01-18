const express = require('express');
const router = express.Router();

const { updateUser, deleteUser, getUserListings } = require('../controller/userController.js');
const { verifyToken } = require('../middlewares/verifyUser.js');

router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);

module.exports = router;