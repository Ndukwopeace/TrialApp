const chatModel = require('../model/chat.model');

module.exports = {
    createChat : async(req , res) => {
        const newChat = new chatModel({members:[{senderId: req.params.senderId , recieverId:req.params
            .recieverId}]});
            try{
            const result = await newChat.save();
            res.status(200).json(result);
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