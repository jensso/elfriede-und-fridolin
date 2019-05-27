const mongoose = require('mongoose');

const patternSchema = new mongoose.Schema({
  Produktname: {type: String, required: true},
  Produktnummer: {type: Number, required: false},
  Produktfotos: {type: String, required: true},
  Preis: {type: Number, required: true},
  Beispielfotos: {type: String, required: true},
  Produktbeschreibung: {type: String, required: true}
}, {versionKey: false})

const patternModel = mongoose.model('Patterns', patternSchema);

module.exports = patternModel;
