const User = require("../model/user.model.js")
const bcrypt = require('bcrypt');
const { CreateToken } = require("../utils/jwt.utils.js");



module.exports = {
    register: async (req, res) => {
        try {
            const tempUser = await User.findOne({email: req.body.email});
            if(tempUser) {
                res.Status(400).json({'errors': {
                    'email': { 'message': 'Email should  is taken' }}})
            }
            const user = await User.create(req.body);
            const userToken = CreateToken(user._id);
            
                res
                    .cookie("userToken", userToken, { httpOnly: true })
                    .json({ message: "success", user: user })
                    
        } catch (err) {
            return res.status(400).json(err)
        }
    },
    login: async(req, res) => {

        const user = await User.findOne({ email: req.body.email })

        if (req.body.email === "" && req.body.password === "") {
            return res.status(400).json({
                'errors': {
                    'email': { 'message': 'Email should  not be empty' },
                    'password': { 'message': 'Password should not be empty' }
                }
            });
        } else if (req.body.email === "") {
            return res.status(400).json({
                'errors': {
                    'email': { 'message': 'Email should  not be empty' }
                }
            })

        } else if (req.body.password === "") {
            return res.status(400).json({
                'errors': {
                    'password': { 'message': 'Password should not be empty' }
                }
            })

        }else if (user === null ) {

            return res.status(400).json({
                'errors':
                {
                    'message': 'invalid Credentials'
                }

            });
            // return (res.sendStatus(400))
        } 


        // if user exists compare passwords , this will return either true or false 

        const comparePasswords = await bcrypt.compare(req.body.password, user.password)

        // if false
        if (!comparePasswords) {
            // console.log(res.status(400))
            return res.status(400).json({ 'errors': { 'message': 'invalid Credentials' } })
        }

        // if it is correct we now create a jsonwebtoken for the user
        userToken = CreateToken(user._id)
            
        return (
            res
                .cookie("userToken", userToken, { httpOnly: true })
                .json({ message: "success", user: user })
        )
    },

    logout: (req, res) => {
        res.clearCookie('userToken')
        res.sendStatus(200)
    },
    findUser: (req, res ) => {
        // console.log("logged in user is ", userId)
        User.findById(req.userId)
            .then(user => {
                console.log(res.json(user));
                res.json(user);
            })
            .catch(err => {
                console.log(err)
            }
            )
    },

    updateUser : async(req , res)=>{
        // console.log(req);

        const body = req.body
        if (req.file){
            body = {...req.body , profilePic: req.file.filename}
        }
        try{
        const result = await User.findOneAndUpdate({_id: req.userId} ,body, {new : true ,runValidators: true})
            res.status(200).json(result)
            console.log(result);


        }catch(error){
            res.status(400).json(error)
        }
    },
    findAll: (req , res ) => {
        // console.log("logged in user is ", userId)
        User.find({})
            .then(users => {
                console.log(res.json(users))
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err);
            }
            )
    },
    followUser : async (req, res) =>{
        const personFollowedId = req.params.id;
        const followerId = req.userId;
            if (followerId === personFollowedId){
                return res.status(500).json({message : "You cant follow yourself"})
            }
        try{
            // find user first 
            const follower = await User.findById({_id:followerId});
            const personFollowed = await User.findById({_id:personFollowedId});
            // check if you are already following the person
            if(follower.following.includes(personFollowedId)){
                res.status(403).json({ message : "You are already following this person"});
            }
            else{
                await User.findOneAndUpdate(follower,{$push : {following: personFollowedId}},{new: true});

                await User.findOneAndUpdate(personFollowed ,{$push : {followers : followerId}}, {new : true});
    
                res.status(200).json({follower: follower , followed: personFollowed});
            }
            
        }
        catch(err){
            res.status(400).json("whats up?");
        }
    }

}