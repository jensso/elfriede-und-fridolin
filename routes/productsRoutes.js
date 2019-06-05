const express = require('express');
const productsRoutes = express.Router();
const { addProducts, getAllProducts, deleteProducts } = require('../middlewares/productsRoutesHandler');

productsRoutes.post('/addProducts', addProducts);
productsRoutes.get('/getProducts', getAllProducts);
productsRoutes.delete('/:produktnummer', deleteProducts);


module.exports = productsRoutes;
