const express = require('express');
const patternsRoutes = express.Router();
const { addPatterns, getAllPatterns, deletePatterns, updatePatterns } = require('../middlewares/patternsRoutesHandler');

patternsRoutes.post('/addPatterns', addPatterns);
patternsRoutes.get('/getPatterns', getAllPatterns);
patternsRoutes.delete('/:patternnummer', deletePatterns);
patternsRoutes.put('/:patternnummer', updatePatterns);


module.exports = patternsRoutes;
