const express = require('express');
const router = express.Router();

const { updateUser } = require('../controller/userController.js');
const { verifyToken } = require('../middlewares/verifyUser.js');

router.post('/update/:id', verifyToken, updateUser);

module.exports = router;