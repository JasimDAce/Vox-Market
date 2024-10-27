const { Schema, model } = require("../connection");

const sellerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  profileImage: { type: String },

  businessName: { type: String, required: false },
  businessAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  businessEmail: { type: String },
  taxId: { type: String },

  bankDetails: {
    bankName: String,
    accountNumber: String,
    IFSC: String,
  },

  isVerified: { type: Boolean, default: false },
  verificationDocuments: [String], // Array of URLs/paths to docs
  verifiedAt: { type: Date },

  totalProducts: { type: Number, default: 0 },
  ratings: { type: Number, default: 0 },
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // Referencing a review model
  totalSales: { type: Number, default: 0 },

  status: {
    type: String,
    enum: ["Active", "Inactive", "Banned"],
    default: "Active",
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = model("sellercollections", sellerSchema);
