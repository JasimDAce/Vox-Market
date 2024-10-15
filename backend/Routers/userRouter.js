const express = require('express');
const router = express.Router();
const Model = require('../Model/userModel');
const jwt =require("jsonwebtoken"); 
const bcrypt = require('bcrypt');
require('dotenv').config();


const maxAge = 60*60*24*1;

const jwtSignature =(id)=>{
    const payload = {id};
   return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:maxAge});
};

const hashPassword = (plainTextPassword) => {
    const saltRounds = 10; // The cost factor for hashing, a common choice is 10
    const hashedPassword =bcrypt.hash(plainTextPassword, saltRounds);
    return hashedPassword;
};

router.get('/test',(req,res)=>{
    res.send("User Route working")
});

router.get('/getAll',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });
    
});

router.post('/addUser',async (req,res)=>
    {
        console.log(req.body);
        const {name,email,password,phoneNumber} = req.body;
        const newPass = await hashPassword(password);
    
        new Model({name,email,password:newPass,phoneNumber}).save()
        .then((result) => {
            const token = jwtSignature(result._id);
            res.cookie('jwt',token,{maxAge:maxAge*1000});
            console.log(token);
            console.log("new Password: ",newPass);
            
            res.status(200).json({user:result._id,token:token});
        }).catch((err) => {
            res.status(500).json(err);
            console.log(err);
        });
        
    });


module.exports = router;