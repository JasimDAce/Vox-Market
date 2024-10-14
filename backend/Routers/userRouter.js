const express = require('express');
const router = express.Router();
const Model = require('../Model/userModel');


router.get('/test',(req,res)=>{
    res.send("User Route working")
});


module.exports = router;