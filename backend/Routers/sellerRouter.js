const express = require('express');
const Model = require('../Model/sellerModel');
const jwt =require("jsonwebtoken"); 
require('dotenv').config();

const router = express.Router();

router.get('/getAll',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });
    
});

router.post("/addSeller", (req, res) => {
    console.log(req.body);
    //asynchronous that why we will get promise obj
    new Model(req.body)
    .save()
    //thenc is the shortcut
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    });

    router.post("/authenticate", (req, res) => {
    Model.findOne({email : req.body.email})
        .then((result) => {
        if (result) {
            //JWT to generate and verify the token and .env is used
            //payload , secretkey, expiry
    
            const { _id, email, password } = result;
            if(password === req.body.password){

            
            const payload = { _id, email, password };
            jwt.sign(
            payload,
            "process.env.JWT_SECRET",
            { expiresIn: "1hr" },
            (err, token) => {
                if (err) {
                console.log(err);
                return res.status(500).json(err);
                } else {
                return res.status(200).json({ token: token });
                }
            }
            )}
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
        })
        .catch((err) => {
        console.log(err);
        res.status(500).json(err);
        });
    });
    
    

router.get('/test',(req,res)=>{
    res.send("User Route working")
});


module.exports = router;