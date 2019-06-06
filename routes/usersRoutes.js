const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../middlewares/validateUserCreate');
const { getAllUsers, createUsers } = require('../middlewares/usersRoutesHandler');


usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.get('/', getAllUsers)

module.exports = usersRoutes;
