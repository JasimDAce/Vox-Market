const jwt = require('jsonwebtoken');
require('dotenv').config();


const requireAuth = (req,res,next) =>{
    const token =req.cookies.jwt;

    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
            if(err){
                console.log('verify err',err);
                // return res.redirect('/login');
               return res.status(400).json({message:"Jwt verification err"});
                
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        console.log('redirected with no token found');
       return res.status(400).json({message:"no JWT present"});
    //    return res.redirect('/signup');
       
    }
}

module.exports = {requireAuth}; 
