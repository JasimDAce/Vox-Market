const { Schema, model, Types } = require("../connection");

const CheckoutSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [
    {
      product: {
        //   type: mongoose.Schema.Types.ObjectId,
        type:Types.ObjectId,
        ref: "productcollections",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  payment: {
    method: {
      type: String, // e.g., 'credit_card', 'paypal'
      required: true,
    },
    status: {
      type: String, // 'pending', 'completed', 'failed'
      required: true,
    },
    transactionId: {
      type: String,
    },
  },
  shippingAddress: {
    fullName: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  taxAmount: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
    required: true,
  },
  status: {
    type: String, // e.g., 'processing', 'shipped', 'delivered'
    default: "processing",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("orders", CheckoutSchema);