const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const AccountDetailsScehma = new Schema({
    
    AccountNumber: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    RTGSIFSCCode: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    NEFTIFCSCode: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    MICRNO: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    PAN: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
});

const AccountDetailsModel = mongoose.model('accountdetails', AccountDetailsScehma);

module.exports = AccountDetailsModel;