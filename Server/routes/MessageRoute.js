const express = require('express');
const messageController = require("../controller/message.controller")
const route = express.Router();


route.get('/' , messageController.getAllMessages)
route.post('/send/', messageController.addMessage );
route.delete('/delete/:id', messageController.deleteMessage)
route.get(`/:chatId` , messageController.getMessagesByChatId)


module.exports = route