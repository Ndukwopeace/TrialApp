const jwt = require('jsonwebtoken')
require('dotenv').config();

module.exports.CreateToken = (id) =>{
    return jwt.sign({id : id} , process.env.MY_SECRET , {expiresIn : 3*24*60*60} ) // expires in 3days
}

