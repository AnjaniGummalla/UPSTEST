const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const addressScehma = new Schema({
    
    email: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    tel: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    phone: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    Fax: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },

});

const AddressModel = mongoose.model('address', addressScehma);

module.exports = AddressModel;