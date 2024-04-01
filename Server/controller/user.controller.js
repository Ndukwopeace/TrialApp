const User = require('../model/user.model.js');
const bcrypt = require('bcrypt');
const {CreateToken} = require('../config/jwt.config.js');

module.exports = {
    
    deleteUser: (req, res) => {
        User.deleteOne({ _id:req.params.id })
            .then(deleted => console.log(res.json(deleted)))
            .catch(err => console.log(err))
    },
    findUserById: (req, res ) => {
        // console.log("logged in user is ", userId)
        User.findById({_id : req.params.id})
            .then(user => {
                console.log(res.json(user));
                res.json(user);
            })
            .catch(err => {
                console.log(err)
            }
            )
    },
}