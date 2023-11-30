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


app.use('/server/auth', authRoute);