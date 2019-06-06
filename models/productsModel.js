const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  Produktname: {type: String, required: true},
  Produktnummer: {type: String, required: false},
  Produktfotos: {type: Array, required: true},
  Preis: {type: String, required: true},
  ProduktTyp: {type: String, required: true},
  Produktbeschreibung: {type: String, required: true}
}, {versionKey: false})

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
