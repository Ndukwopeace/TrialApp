const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message : {type : String},
    senderId : {type : String},
    chatId : {type : String}
    
} , {timestamps: true})

module.exports = mongoose.model('Message', messageSchema);