const express = require('express');
const router = express.Router();

const { userSignUp, userSignIn } = require('../controller/authController');

router.post('/signup', userSignUp);
router.post('/signin', userSignIn);

module.exports = router;