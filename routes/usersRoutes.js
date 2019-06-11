const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../middlewares/validateUserCreate');
const { getAllUsers, createUsers, userLogin } = require('../middlewares/usersRoutesHandler');
// const userLoginAuth = require('../middlewares/userLoginAuth');
const loginValidate = [...userCreateValidator];

usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.post('/login', loginValidate, userLogin)
usersRoutes.get('/', getAllUsers)

module.exports = usersRoutes;
