const { Schema, model } = require("../connection");

const productSchema  = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxlength: [100, 'Product name cannot exceed 100 characters']
      },
      price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
      },
      stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0
      },
      category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
        maxlength: [50, 'Category name cannot exceed 50 characters']
      },
      imageUrl: {
        type: String,
        required: true,
        trim: true,
        validate: {
          validator: function (v) {
            return /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i.test(v);
          },
          message: 'Please enter a valid image URL'
        }
      },
      description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot exceed 500 characters']
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });
    
  module.exports = model("productCollections", productSchema );