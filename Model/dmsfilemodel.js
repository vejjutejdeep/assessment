const mongoose = require('mongoose');
// const Schema =  mongoose.schema

const files = new mongoose.Schema({
    folderid: {
        type:String
    },
    filename: {
        type:String
    },

    userid: {
        type:String,
        
    },

    content: {
        type:String
    }

}, {timestamps: true});

const filesSchema = mongoose.model('files', files) ;

module.exports = filesSchema;