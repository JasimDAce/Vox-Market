const {Schema,model} = require('../connection');

const mySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    
    },
    createdAt:{
        type:Date,
        default:Date.now
    },

});

// mySchema.pre('save', function(next){

// next();
// })

module.exports =model('testModel',mySchema);