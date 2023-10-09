const mongoose = require('mongoose');
// const Schema =  mongoose.schema

const Users = new mongoose.Schema({
    name: {
        type:String
    },
    username: {
        type:String
    },

    password: {
        type:String,
        
    },

}, {timestamps: true});

const UserSchema = mongoose.model('user', Users) ;

module.exports = UserSchema;