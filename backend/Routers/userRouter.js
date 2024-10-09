const express = require('express');
const router = express.Router();
// const Model = require('../Models/UserModel');


router.get('/test',(req,res)=>{
    res.send("User Route working")
});


module.exports = router;