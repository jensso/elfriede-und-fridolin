const express = require('express');
const server = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const paypal = require('paypal-rest-sdk');
const cookieParser = require('cookie-parser');
const errorHandler = require('./Middlewares/errorHandler');
const connectDb = require('./utilities/dbConnect');
const usersRoutes = require('./routes/usersRoutes');
const patternsRoutes = require('./routes/patternsRoutes');
const clothesRoutes = require('./routes/clothesRoutes');
const emailRoutes = require('./routes/emailRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const path = require('path');
// const cors = require('cors');

const whitelist = ['http://localhost:4000/'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};


paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'Ab4z0WpX0rMuHRUCsH5OgP4hedQkhCcizp8jfQwW3JXq2OlYwhtCkMqwRKUy8GC9JEwCoY5GDWlxylnZ',
  'client_secret': 'EKVgj2OKCh3jX7wAU-Mi2ASWSye54kBEiuvtg4rPgIOcbq6K5_Ab_PbEdXC_vZnEhaTzkaR7nFW6agt7'
});

mongoose.set('useNewUrlParser', true);

server.listen('4000',  () => console.log('Server is listening to the designated port'));
connectDb();


server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(express.static(path.join(__dirname, 'browser', 'build')));
server.use(cookieParser());


server.use('/users', usersRoutes);
server.use('/patterns', patternsRoutes);
server.use('/clothes', clothesRoutes);
server.use('/email', emailRoutes);
server.use('/orders', ordersRoutes);

server.use(errorHandler);
