const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../middlewares/validateUserCreate');
const { getAllUsers, createUsers, getUserByEmail } = require('../middlewares/usersRoutesHandler');
// const userLoginAuth = require('../middlewares/userLoginAuth');
const loginValidate = [...userCreateValidator];

usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.post('/login', loginValidate, getUserByEmail)
usersRoutes.get('/', getAllUsers)

module.exports = usersRoutes;
