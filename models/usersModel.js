const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Anrede: {type: String, required: true},
  Vorname: {type: String, required: true},
  Nachname: {type: String, required: true},
  Strasse: {type: String, required: true},
  Postleitzahl: {type: Number, required: true},
  Ort: {type: String, required: true},
  Land: {type: String, required: true},
  Email: {type: String, required: true, unique: true},
  Password: {type: String, required: true},
  resertPasswordToken: String,
  resetPasswordExpires: String,
  isAdmin: {type: Boolean, required: false, default: false}
}, {versionKey: false})

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
