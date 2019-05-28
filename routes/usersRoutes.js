const express = require('express');
const usersRoutes = express.Router();

const { getAllUsers, createUsers } = require('../Middlewares/usersRoutesHandler');


usersRoutes.post('/signUp', createUsers)
usersRoutes.get('/', getAllUsers)

module.exports = usersRoutes;
