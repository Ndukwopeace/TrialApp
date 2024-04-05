// const { request } = require('http');
const messageModel = require('../model/message.model');

module.exports = {
        addMessage : async(req , res) => {
               
                const {message , senderId , chatId} = req.body;
                console.log(req.body);
                try{
                        const message = await messageModel.create(req.body);
                        res.status(200).json(message)
                }catch(err){
                        res.status(500).json(err);
                }
        },

        getAllMessages : async(req , res) => {        
                try{
                    const messages = await messageModel.find();
                    res.status(200).json(messages);    
                }catch(err){
                        res.status(500).json(err);
                }
        },
        deleteMessage : async(req , res) => {
                try{
                        await messageModel.findOneAndDelete({_id: req.params.id});
                        res.status(200).json("deleteSucessful")
                }catch(err){
                        res.status(500).json(err);
                }
        },

        getMessagesByChatId : async(req , res) => {
                try{
                        const chats = await messageModel.find({chatId: req.params.chatId});
                        res.status(200).json(chats); 
                }
                catch(err){
                        res.status(500).json(err);
                }
        }
}