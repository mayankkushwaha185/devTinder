const  mongoose = require('mongoose')
const validtor = require('validator')

const userSchema = mongoose.Schema({
    firstName:{type : String, required:true, lowercase: true },
    lastName :{type:String, required:true,},
    emailId:{type:String , required:true, unique:true, lowercase:true, trim:true, validate(value){if(!validtor.isEmail(value)){throw new Error("Invalid email address:"+ vlaue);}}},
    password:{type:String, required:true, validate(value){if(!validtor.isStrongPassword(value)){throw new Error("Enter a strong password:"+ vlaue);}}},
    age:{type:String},
    gender:{type:String},
    photoUrl: {type:String,  validate(value){if(!validtor.isURL(value)){throw new Error("Invalid Photo URL:"+ vlaue);}}},
    skills:{type:[String],
    }
}, {timestamps:true})

const User = mongoose.model("user", userSchema)

module.exports = User 