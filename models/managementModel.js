const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const managementScehma = new Schema({
    
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
    ContactDetails: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },

});

const ManagementModel = mongoose.model('management', managementScehma);

module.exports = ManagementModel;