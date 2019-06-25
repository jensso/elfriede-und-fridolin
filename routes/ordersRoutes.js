const express = require('express');
const ordersRoutes = express.Router();
const { usersAuth, adminAuth } = require('../middlewares/authenticated');
const { submitOrder, successOrder, cancelOrder } = require('../middlewares/ordersHandler');

ordersRoutes.post('/checkout', usersAuth, submitOrder)
ordersRoutes.get('/success', usersAuth, successOrder )
ordersRoutes.post('/cancel', usersAuth, cancelOrder)


module.exports = ordersRoutes;
