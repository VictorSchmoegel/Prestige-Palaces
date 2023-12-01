const express = require('express');
const router = express.Router();

const { userSignUp, userSignIn, Google } = require('../controller/authController.js');

router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
router.post('/google', Google);

module.exports = router;