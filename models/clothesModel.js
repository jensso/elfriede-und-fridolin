const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  produktname: {type: String, required: true},
  produktnummer: {type: String, required: true},
  produktfotos: {type: Array, required: true},
  preis: {type: String, required: true},
  produktTyp: {type: String, required: true},
  produktbeschreibung: {type: String, required: true},
  category: {type: String, required: true}
}, {versionKey: false})

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
