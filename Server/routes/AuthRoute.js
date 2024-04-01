
const express = require('express')
const AuthController = require('../controller/auth.controller.js')
const User = require('../model/user.model.js')
const user = new User();
let path = require('path')
const multer = require('multer');
const { authenticate } = require('../config/jwt.config.js');

// const storage = multer.diskStorage({
//     destination : (req , res , cb)=>{
//         cb(null,'uploads')
//     },
//     filename : (req , res , cb) => {
//         cb(null , file.fieldname )
//     }
// })

const storage = multer.diskStorage({
    destination: (req,file , callBack) =>{
        callBack(null , 'uploads')
    },
    filename: ( req ,file , callBack)=>{
        callBack(null ,Math.random()*10e15 + '-' + Date.now() + path.extname(file.originalname))
    } }
)

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({storage , fileFilter})

const router = express.Router();
    router.post("/login" , AuthController.login);
    router.post("/register" , AuthController.register);
    router.post("/user/logout" , AuthController.logout);
    router.get("/user",authenticate,  AuthController.findUser);
    router.put("/follow/:id",authenticate, AuthController.followUser);
    router.get("/users", AuthController.findAll);
    router.put("/update/" ,authenticate,upload.single('profilePic'), AuthController.updateUser);

    console.log("thank you ");

    module.exports = router