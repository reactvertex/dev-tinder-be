const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 25
    },
    lastName: {
        type: String
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        validate(value) {
          if(!validator.isEmail(value)){
             throw new Error(`Email is not valid ${value}`)
          }
        }
    },
    password:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    gender:{
        type: String,
        validate(value){
           if(!['male', 'female', 'other'].includes(value)){
            throw new Error("Gender data is not valid")
           }
        }
    },
    about: {
      type: String,
      default: "this is default About of user"
    },
    userProfile: {
        type: String,
        default: "https://icons8.com/icons/set/profile",
         validate(value){
           if(!validator.isURL(value)){
            throw new Error("profile URL is not valid")
           }
        }
    },
    skills: {
        type: [String],

    }
}, { timestamps: true})

const User = mongoose.model('user', userSchema);

module.exports = User;