const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true , "First name is required"],
        minLength : [3 , "Should not be less than  3 characters"]
    }, 
    lastName : {
        type : String,
        required : [true , "Last name is required"],
        minLength : [3 , "Should not be less than 3 characters"]
    },
    userName : {
        type : String,
        required : [true , "Choose a user name"],
        minLength : [3 , "Should not be less than 3  characters"]
    },

    email : {
        type : String,
        required : [true , "Email is required"],
        validate : {
                validator : val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
        },
        
    },
    password : {
        type : String ,
        required : [true , "Password is required"],
        minlength: [8 , "Password must be a 8 characters or longer"]
    },
    profilePic : {
        type : String,
        default : "img1.jpeg"
    },
    coverPic : String,
    livesIn : String,
    worksAt : String,
    inRelationship: String,
    country: String,
    followers : [{type : mongoose.Types.ObjectId,
    ref : "User"}],
    following : [{type : mongoose.Types.ObjectId,
    ref : "User"}]

}, {timestamps : true})

UserSchema.virtual('confirmPassword')
.get(() => this._confirmPassword)
.set((valueFromForm) => this._confirmPassword = valueFromForm )

UserSchema.pre('validate' , function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword " , "Confirm Password and password should match")
    }
    next();
} )


UserSchema.pre('save' , function(next){
    bcrypt.hash(this.password , 10)
    .then((hashedpassword) =>{
        this.password = hashedpassword;
        next();
    })
})

module.exports = mongoose.model("User" , UserSchema);