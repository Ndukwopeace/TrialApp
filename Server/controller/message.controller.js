const { request } = require('http');
const messageModel = require('../model/message.model');

module.exports = {
        addMessage : async(req , res) => {
                const chatId = req.params.id
                const {message , senderId  } = req.body;

                try{
                        const message = await messageModel.create({...req.body , chatId:chatId});
                        res.status(200).json(message)
                }catch(err){
                        res.status(500).json(err);
                }
        },

        getAllMessages : async(req , res) => {
        
                try{
                    const messages = await messageModel.findAll({})
                    res.status(200).json(messages);    
                }catch(err){
                        res.status(500).json(err);
                }
        }

}