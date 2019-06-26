const mongoose = require('mongoose');

const patternsSchema = new mongoose.Schema({
  produktname: {type: String, required: true},
  produktnummer: {type: String, required: true},
  produktfotos: {type: [String], required: true},
  preis: {type: String, required: true},
  produktTyp: {type: String, required: true},
  produktbeschreibung: {type: String, required: true},
  category: {type: String, required: true},
  id: {type: String, required: true},
}, {versionKey: false})

const patternsModel = mongoose.model('cuttingPatterns', patternsSchema);

module.exports = patternsModel;
