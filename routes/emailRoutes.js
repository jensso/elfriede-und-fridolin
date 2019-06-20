const express = require('express');
const emailRoutes = express.Router();
const userModel = require('../models/usersModel');
const confirmEmail = require('../middlewares/emailHandler');


emailRoutes.get('/confirm/:stamp', confirmEmail)


module.exports = emailRoutes;
