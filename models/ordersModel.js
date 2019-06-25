const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  userInfo: {type: Array, require: true},
  orders: {type: Array, require: true},
  totalPries: {type: Number, require: true}
}, {versionKey: false})

const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = ordersModel;
