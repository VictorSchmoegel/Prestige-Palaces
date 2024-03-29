const express = require('express');
const mongoose = require('mongoose');
const router = require('./server/routes/route');
require('dotenv').config();
const authRoute = require('./server/routes/authRoute');
const userRoute = require('./server/routes/userRoute');
const listingRoute = require('./server/routes/listingRoute');
const cookieParser = require('cookie-parser');
const path = require('path');

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(router);
app.use(cookieParser());


app.listen(3000, () => {
  console.log('server running on port 3000');
});

app.use('/server/auth', authRoute);
app.use('/server/user', userRoute);
app.use('/server/listing', listingRoute);

app.use(express.static(path.join(__dirname, './client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});