const express = require('express')
const {authenticate} = require('../config/jwt.config.js')
const UserController = require('../controller/user.controller.js')
const router = express.Router();


    router.delete("/delete/:id" , UserController.deleteUser)
    router.get("/:id" , UserController.findUserById);
    console.log("thank you ");

    module.exports = router 