const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    recieverId : {type : String},
    senderId : {type : String},
} , {timestamps: true})

module.exports = mongoose.model('Chat', chatSchema);