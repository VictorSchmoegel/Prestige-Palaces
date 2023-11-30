const express = require('express');
const router = express.Router();

const { userSignUp, userSignIn } = require('../controller/authController.js');

router.post('/signup', userSignUp);
router.post('/signin', userSignIn);

module.exports = router;