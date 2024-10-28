const express = require("express");
const router = express.Router();
const Model = require("../models/OrderModel");
require("dotenv").config();


//working from /o/checkout
router.post('/checkout', async (req, res) => {
    try {
      const { user, items, payment, shippingAddress, totalPrice, taxAmount, shippingCost } = req.body;
  
      const newCheckout = new Model({
        user,
        items,
        payment,
        shippingAddress,
        totalPrice,
        taxAmount,
        shippingCost,
      });
  
      const savedCheckout = await newCheckout.save();
      console.log("working");
      res.status(201).json(savedCheckout);
      console.log(savedCheckout);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get checkout by ID
  // need changes {incorrect Model name}
  router.get('/checkout/:id', async (req, res) => {
    try {
      const checkout = await checkout.findById(req.params.id).populate('user items.product');
      if (!checkout) return res.status(404).json({ message: 'Checkout not found' });
      res.json(checkout);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  