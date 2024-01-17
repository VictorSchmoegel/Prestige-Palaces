const express = require('express');
const router = express.Router();

const { userSignUp, userSignIn, Google, userSignOut } = require('../controller/authController.js');

router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
router.post('/google', Google);
router.get('/signout/:id', userSignOut);

module.exports = router;