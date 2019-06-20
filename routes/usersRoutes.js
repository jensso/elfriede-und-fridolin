const express = require('express');
const usersRoutes = express.Router();
const userCreateValidator = require('../middlewares/validateUserCreate');
const { getAllUsers, createUsers, userLogin, deleteUserById, userLoggedOut, sendTokenToResetPass, resetPass, adminLogin } = require('../middlewares/usersRoutesHandler');
const { usersAuth, adminAuth } = require('../middlewares/authenticated');
const loginValidate = [...userCreateValidator];


usersRoutes.post('/signUp', userCreateValidator, createUsers)
usersRoutes.post('/login', loginValidate, userLogin)
usersRoutes.post('/AdminLogin', adminLogin)
usersRoutes.get('/loggedOut', usersAuth, userLoggedOut)
usersRoutes.get('/', adminAuth, getAllUsers)
usersRoutes.post('/forgot', sendTokenToResetPass)
usersRoutes.get('/resetPassword/:token', resetPass)
usersRoutes.delete('/deactive/:userId', usersAuth, deleteUserById)

module.exports = usersRoutes;
