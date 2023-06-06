const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true 
    },
    email: { 
        type: String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
   
},{
    timestamps: true
});

const User = new mongoose.model('users', userSchema)

module.exports = { User };