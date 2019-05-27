const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

mongoose.set('useCreateIndex', true);

const connectDb = async () => {
  try {
    console.log('About to connect to database');
    await mongoose.connect('mongodb://localhost:27017/Elfriede-und-friedolin', {useNewUrlParser: true});
    console.log('Connected to database! Success');    
  } catch (err) {
    next(err);
  }
}

module.exports = connectDb;
