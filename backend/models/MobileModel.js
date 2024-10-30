const {Schema,model} = require('../connection');

const mobileSchema = new mongoose.Schema({
    brand: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    specifications: {
      screenSize: {
        type: String,
        required: true,
        trim: true
      },
      processor: {
        type: String,
        required: true,
        trim: true
      },
      ram: {
        type: String,
        required: true,
        trim: true
      },
      storage: {
        type: String,
        required: true,
        trim: true
      },
      battery: {
        type: String,
        required: true,
        trim: true
      },
      camera: {
        type: String,
        required: true,
        trim: true
      },
      operatingSystem: {
        type: String,
        required: true,
        trim: true
      }
    },
    availability: {
      type: Boolean,
      default: true
    },
    releaseDate: {
      type: Date
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const Mobile = mongoose.model('Mobile', mobileSchema);
  
  module.exports = Mobile;