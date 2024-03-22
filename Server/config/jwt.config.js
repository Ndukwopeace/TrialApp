const jwt = require('jsonwebtoken');

// const User = require("../models/user.models")
require('dotenv').config();
// const secret = " i don't understand this " // TODO search what this means 

// module.exports.secret =  secret;

module.exports.authenticate = (req , res ,next) =>{
    jwt.verify(req.cookies.userToken , process.env.MY_SECRET , (err , decodedToken)=>{
        // console.log(decodedToken)
        // console.log(user)
        if (err){
            res.status(401).json({verified: false , message: "unauthorized access"});

        }else {
            req.userId = decodedToken.id
            console.log(req.userId)
            console.log(process.env.MY_SECRET)
            next();
        } 
    }
    )
   
}