const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const salesScehma = new Schema({
    
    Name: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    Designation: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    Department: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    email: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    phoneNumber: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    Level:{
        type:String,
    }

});

const salesModel = mongoose.model('sales', salesScehma);

module.exports = salesModel;