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
                req.user = decodedToken; //this add a ob which has all the info of the user.
                next();
            }
        })
    }else{
        console.log('redirected with no token found');
       return res.status(401).json({message:"no JWT present"});//giving 401 as response to check in frontend for lient side routing.
    //    return res.redirect('/signup');this does not work as axios does not allow server side redirects treats them as 400 request and only take 200 req

       
    }
}

module.exports = {requireAuth}; 
