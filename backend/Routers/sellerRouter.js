const express = require('express');
const router = express.Router();
const Model = require('../Model/sellerModel');
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



router.get('/getAll',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });
    
});

router.post('/addSeller',async (req,res)=>
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
               return res.status(404).json('User not Found');
            }else{
                bcrypt.compare(password,user.password,(err,isMatch)=>{
                    if(isMatch){
                        const token = jwtSignature(user._id);
                        res.cookie('jwt',token,{maxAge:maxAge*1000});
                        return res.status(200).json('Login success');
                    }else{
                        return res.status(400).json("Login failed");
                    }
                })
            }
            
        }).catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    })

    // router.post("/authenticate", (req, res) => {
    //     Model.findOne(req.body)
    //       .then((result) => {
    //         if (result) {
    //           //JWT to generate and verify the token and .env is used
    //           //payload , secretkey, expiry
      
    //           const { _id, email, password } = result;
    //           const payload = { _id, email, password };
    //           jwt.sign(
    //             payload,
    //             "process.env.JWT_SECRET",
    //             { expiresIn: "1hr" },
    //             (err, token) => {
    //               if (err) {
    //                 console.log(err);
    //                 res.status(500).json(err);
    //               } else {
    //                 res.status(200).json({ token: token });
    //               }
    //             }
    //           );
    //         } else {
    //           res.status(401).json({ message: "Invalid Credentials" });
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         res.status(500).json(err);
    //       });
    //   });
      

    router.get('/test',(req,res)=>{
        res.send("User Route working")
    });


module.exports = router;