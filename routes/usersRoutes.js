const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../middlewares/validateUserCreate');
const { getAllUsers, createUsers, userLogin, deleteUserById, userLoggedOut, sendTokenToResetPass, resetPass } = require('../middlewares/usersRoutesHandler');
const authenticated = require('../middlewares/authenticated');
const loginValidate = [...userCreateValidator];


usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.post('/login', loginValidate, userLogin)
usersRoutes.get('/loggedOut', authenticated, userLoggedOut)
usersRoutes.get('/', authenticated, getAllUsers)
usersRoutes.post('/forgot', sendTokenToResetPass)
usersRoutes.get('/resetPassword/:token', resetPass)
usersRoutes.delete('/deactive/:userId', authenticated, deleteUserById)

module.exports = usersRoutes;
