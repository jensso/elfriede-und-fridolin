const express = require('express');
const server = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./Middlewares/errorHandler');
// const PORT = process.env.PORT || 8080;
const connectDb = require('./utilities/dbConnect');
const usersRoutes = require('./routes/usersRoutes');




mongoose.set('useNewUrlParser', true);

server.listen('4000',  () => console.log('Server is listening to the designated port'));
connectDb();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser()); // creates req.cookies to read from and the res.cookie to write to a cookie

server.use('/users', usersRoutes);

server.use(errorHandler);
