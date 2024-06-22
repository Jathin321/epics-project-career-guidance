const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    surname : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    state: {
        type : String,
        required : true
    },
    favorites : {
        type : Array,
        required : false
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('user',UserSchema)