const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route');
require('dotenv').config();
const authRoute = require('./routes/authRoute');

const app = express();
app.use(express.json());
app.use(router);

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});

app.use((err, req, res) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.use('/server/auth', authRoute);