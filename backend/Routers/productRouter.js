const express = require('express');
const Product = require('../Model/productModel'); // Import the Product model
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

// Get all products
router.get('/getAll', (req, res) => {
    Product.find()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Add a new product
router.post('/addProduct', (req, res) => {
    console.log(req.body);
    
    // Create a new product using the request body
    new Product(req.body)
    .save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Update an existing product
router.put('/updateProduct/:id', (req, res) => {
    const productId = req.params.id;
    
    // Find product by ID and update it with the request body
    Product.findByIdAndUpdate(productId, req.body, { new: true })
    .then((result) => {
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete a product
router.delete('/deleteProduct/:id', (req, res) => {
    const productId = req.params.id;
    
    // Find the product by ID and delete it
    Product.findByIdAndDelete(productId)
    .then((result) => {
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Get a single product by ID
router.get('/getProduct/:id', (req, res) => {
    const productId = req.params.id;

    Product.findById(productId)
    .then((result) => {
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
