const mongoose = require('mongoose');

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
        lowercase: true
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
      default: "user....."
    },
    userProfile: {
        type: String,
        default: "https://icons8.com/icons/set/profile"
    }
}, { timestamps: true})

const User = mongoose.model('user', userSchema);

module.exports = User;