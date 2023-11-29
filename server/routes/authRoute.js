const express = require('express');
const router = express.Router();

const { userSignUp } = require('../controller/authController');

router.post('/signup', userSignUp);

module.exports = router;