const express = require('express');
const productsRoutes = express.Router();
const { addProducts, getAllProducts, deleteProducts, updateProducts } = require('../middlewares/productsRoutesHandler');

productsRoutes.post('/addProducts', addProducts);
productsRoutes.get('/getProducts', getAllProducts);
productsRoutes.delete('/:produktnummer', deleteProducts);
productsRoutes.put('/:produktnummer', updateProducts);


module.exports = productsRoutes;
