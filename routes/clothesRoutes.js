const express = require('express');
const clothesRoutes = express.Router();
const { addClothes, getClothesByID, deleteClothesByID, updateClothesByID } = require('../middlewares/clothesRoutesHandler');


clothesRoutes.post('/addClothes', addClothes);
clothesRoutes.get('/:produktnummer', getClothesByID);
clothesRoutes.delete('/:produktnummer', deleteClothesByID);
clothesRoutes.put('/:produktnummer', updateClothesByID);


module.exports = clothesRoutes;
