const express = require('express');
const ordersRoutes = express.Router();
const { usersAuth, adminAuth } = require('../middlewares/authenticated');

ordersRoutes.
