const User = require('../model/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSignUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json('User created successfully');
  } catch (error) {
    next(error);
  }
};

const userSignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const correctPassword = bcryptjs.compareSync(password, user.password);
    if (!correctPassword) {
      return res.status(401).json({ message: 'Wrong credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = user._doc;
    res.cookie('token', token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userSignUp,
  userSignIn,
};