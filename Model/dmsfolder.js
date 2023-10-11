const mongoose = require('mongoose');
// const Schema =  mongoose.schema

const folders = new mongoose.Schema({

    foldername: {
        type:String
    },

    userid: {
        type:String,
        
    },


}, {timestamps: true});

const folderSchema = mongoose.model('folders', folders) ;

module.exports = folderSchema;