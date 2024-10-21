const express = require('express');
const router = express.Router();
const Model = require('../Model/userModel');
const jwt =require("jsonwebtoken"); 
const bcrypt = require('bcrypt');
const {requireAuth} = require("../middleware/authMiddleware");
require('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRET || 'topsecret';//change this code after every thing is working
const maxAge = 60*60*24*1;

const jwtSignature =(id)=>{
    const payload = {id};
   return jwt.sign(payload,JWT_SECRET,{expiresIn:maxAge});
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

    router.post('/authenticate',async (req,res)=>{
        const {email,password} =req.body;

        Model.findOne({email:email}).then((user) => {
            if(!user){
               return res.status(404).json({message:'User not Found'});
            }else{
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(isMatch){
                        const token = jwtSignature(user._id);
                        res.cookie('jwt',token,{maxAge:maxAge*1000});
                        return res.status(200).json({message:'Login success'});
                    }else{
                        console.log(err);
                        return res.status(400).json({message:"Login failed"});
                    }
                })
            }
            
        }).catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    })

    router.get('/logout',(req,res)=>{
        res.cookie('jwt','',{maxAge:1});
        res.status(201).json({message:'Logout user success'});
    })

    router.get('/profile',requireAuth,(req,res)=>{
        const user = req.user;
        console.log(user);
        
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        
        res.status(200).json(user);


        // Model.findById(userId).select('-password')
        // .then((result) => {
        //     console.log(result); 
        //     res.status(200).json(result);
           
        // }).catch((err) => {
        //     res.status(400).json(err);
        // });
        
    })

    


module.exports = router;