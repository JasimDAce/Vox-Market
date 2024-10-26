const express = require("express");
const Model = require("../models/OrderModel");
require("dotenv").config();

const router = express.Router();

router.post('/checkout', async (req, res) => {
    try {
      const { user, items, payment, shippingAddress, totalPrice, taxAmount, shippingCost } = req.body;
  
      const newCheckout = new Checkout({
        user,
        items,
        payment,
        shippingAddress,
        totalPrice,
        taxAmount,
        shippingCost,
      });
  
      const savedCheckout = await newCheckout.save();
      res.status(201).json(savedCheckout);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get checkout by ID
  router.get('/checkout/:id', async (req, res) => {
    try {
      const checkout = await Checkout.findById(req.params.id).populate('user items.product');
      if (!checkout) return res.status(404).json({ message: 'Checkout not found' });
      res.json(checkout);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  
  const express = require('express');
  const mongoose = require('mongoose');
  const bodyParser = require('body-parser');
  const checkoutRoutes = require('./routes/checkout.route');
  
  const app = express();
  const port = process.env.PORT || 3000;
  
  // Middleware
  app.use(bodyParser.json());
  
  // Routes
  app.use('/api', checkoutRoutes);
  
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });