const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../Middlewares/validateUserCreate');
const { getAllUsers, createUsers } = require('../Middlewares/usersRoutesHandler');


usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.get('/', getAllUsers)

module.exports = usersRoutes;
