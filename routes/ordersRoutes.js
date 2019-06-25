const express = require('express');
const ordersRoutes = express.Router();
const { usersAuth, adminAuth } = require('../middlewares/authenticated');
const { submitOrder, successOrder, cancelOrder } = require('../middlewares/ordersHandler');

ordersRoutes.post('/checkout', submitOrder)
ordersRoutes.get('/success', successOrder )
ordersRoutes.post('/cancel', cancelOrder)


module.exports = ordersRoutes;
