const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  userInfo: {type: String, required: true},
  orderItems: {type: [mongoose.Mixed], required: true},
  totalPries: {type: Number, required: true}
}, {versionKey: false})

const ordersModel = mongoose.model('orders', ordersSchema);

module.exports = ordersModel;
