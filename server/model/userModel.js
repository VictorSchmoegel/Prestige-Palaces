const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
    default: '../../client/src/assets/images/avatar-profile.jpg',
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;