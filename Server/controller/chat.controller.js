const chatModel = require('../model/chat.model');

module.exports = {
    createChat: async (req, res) => {

        const testChat = await chatModel.findOne({
            members: [
                 req.params.senderId,  req.params
                    .recieverId
            ]
        })
        console.log(testChat)
        if (testChat) {
            return  ;
        }

        const newChat = new chatModel({
            members: [
                req.params.senderId,  req.params
                   .recieverId
           ]
        });
        try {
            const result = await newChat.save();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getOneChat: async (req, res) => {
        const id = req.params.chatId
        try {
            const chat = await chatModel.findById({ _id: id })
            res.status(200).json(chat);
        } catch (err) {
            res.status(500).json(err);
        }

    },
    deleteChat: async (req, res) => {
        const id = req.params.id
        try {
            const chat = await chatModel.findOneAndDelete({ _id: id })
            res.status(200).json(chat);
        } catch (err) {
            res.status(500).json(err);
        }

    },
    getAllChat: async (req, res) => {
        try {
            const chats = await chatModel.find({});
            res.status(200).json(chats);
        } catch {
            res.status(500).json(err);
        }
    },
    
    getAllUserChat : async(req , res) => {
        try{
            const chat = await chatModel.find({members: {$in: req.params.userId}})
            res.status(200).json(chat);
        }catch(err){
            res.status(500).json(err);
        }
    }











}