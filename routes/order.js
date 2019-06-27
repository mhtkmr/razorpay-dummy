/* eslint-disable no-console */
const express = require('express');
const sha256 = require('sha256');
const instance = require('../razorpay');
const Order = require('../model/order');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('heyuyyyyyy');
  return res.status(200).send('success');
});

router.post('/', async (req, res) => {
  const opts = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: req.body.rpt,
    payment_capture: true,
    notes: req.body.oid,
  };
  const order = await instance.orders.create(opts);
  console.log(order);
  const newOrder = new Order(order);
  const saveOrder = await newOrder.save();
  // save mongoid from saveOrder in browser for further use
  return res.status(200).send(saveOrder);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id);
  if (!order) {
    return res.status(404).send('Error Occured');
  }
  return res.status(200).send(order);
});

router.post('/checkout', async (req, res) => {
  const sig = sha256(razorpay_order_id + '|' + razorpay_payment_id, secret);
});

module.exports = router;
