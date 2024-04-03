const express = require('express');
const messageController = require("../controller/message.controller")
const route = express.Router();


route.get('/' , messageController.getAllMessages)
route.post('/send/:id', messageController.addMessage );
route.delete('/delete/:id', messageController.deleteMessage)
route.get(`/${chatId}` , messageController.getAllMessages)


module.exports = route