const mongoose = require('mongoose');

const schema = mongoose.Schema({
  amount: Number,
  currency: String,
  receipt: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  payment_capture: Boolean,
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
});

module.exports = mongoose.model('Order', schema);
