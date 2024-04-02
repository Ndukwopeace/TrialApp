const express = require('express');
const messageController = require("../controller/message.controller")
const route = express.Router();


route.post('/send/:id', messageController.addMessage );
route.get('/' , messageController.getAllMessages)

module.exports = route