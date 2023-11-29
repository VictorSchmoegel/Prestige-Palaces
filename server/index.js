const authRoute = require('./routes/authRoute');

const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});


app.listen(3001, () => {
  console.log('server running on port 3001');
});

app.use('/auth', authRoute);