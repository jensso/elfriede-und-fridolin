const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  Anrede: {type: String, required: true},
  Vorname: {type: String, required: true},
  Nachname: {type: String, required: true},
  Strasse: {type: String, required: true},
  Postleitzahl: {type: Number, required: true},
  Ort: {type: String, required: true},
  Land: {type: String, required: true},
  Email: {type: String, required: true},
  Password: {type: String, required: true},
  resertPasswordToken: String,
  resetPasswordExpires: String,
  isAdmin: {type: Boolean, required: false, default: false}
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: {type: Boolean, default: false},
  isConfirmed: {type: Boolean, default: false},
  temporaryToken: String
}, {versionKey: false})


const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
