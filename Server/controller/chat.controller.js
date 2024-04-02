const chatModel = require('../model/chat.model');

module.exports = {
    createChat : async(req , res) => {
        const {recieverId , senderId} = req.body;
            try{
            const newChat = await chatModel.create(req.body);
            res.status(200).json(newChat);
            }catch(err){
                res.status(500).json(err);
            }
    } , 

    getOneChat : async(req , res) => {
        const id = req.params.id
        try{
            const chat =  await chatModel.findById({_id : id})
            res.status(200).json(chat);
        }catch(err){
            res.status(500).json(err);
        }

    },
    deleteChat : async(req , res) => {
        const id = req.params.id
        try{
            const chat =  await chatModel.findOneAndDelete({_id : id})
            res.status(200).json(chat);
        }catch(err){
            res.status(500).json(err);
        }

    },
    getAllChat : async(req , res) => {
        try{
            const chats = await chatModel.find({});
            res.status(200).json(chats);
        }catch{
            res.status(500).json(err);
        }
    }

}