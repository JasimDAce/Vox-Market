const {Schema,model} = require('../connection');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
    address: {
        type: String,
        // required: true,
    },
    city: {
        type: String,
        // required: true,
    },
    state: {
        type: String,
        // required: true,
    },
    postalCode: {
        type: String,
        // required: true,
    },
    country: {
        type: String,
        // required: true,
    },
    phoneNumber: {
        type: String,
        // required: true,
    },
    avatar: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // You can adjust roles as needed
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    lastLogin: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
});

// mySchema.pre('save', function(next){

// next();
// })

module.exports =model('users',userSchema);