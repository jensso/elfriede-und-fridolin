const express = require('express');
const server = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./Middlewares/errorHandler');
const connectDb = require('./utilities/dbConnect');
const usersRoutes = require('./routes/usersRoutes');
const patternsRoutes = require('./routes/patternsRoutes');
const clothesRoutes = require('./routes/clothesRoutes');
const emailRoutes = require('./routes/emailRoutes');
const paymentRoutes = require('./routes/paymentRoutes');




mongoose.set('useNewUrlParser', true);

server.listen('4000',  () => console.log('Server is listening to the designated port'));
connectDb();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());

server.use('/users', usersRoutes);
server.use('/patterns', patternsRoutes);
server.use('/clothes', clothesRoutes);
server.use('/email', emailRoutes);
server.use('/payment', paymentRoutes);

server.use(errorHandler);
