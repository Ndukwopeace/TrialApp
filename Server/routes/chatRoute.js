const chatController = require('../controller/chat.controller');
const express = require('express');
const route = express.Router();

route.post('/create/:recieverId/:senderId', chatController.createChat)
route.get('/:id', chatController.getOneChat)
route.delete('/:id/delete', chatController.deleteChat)
route.get('/', chatController.getAllChat)





module.exports = route;