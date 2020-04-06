const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
    
    Manufacturer: {
        type: String,
        required:false,
        lowercase:false,
        minlength: 3,
        maxlength: 80,
        unique:false
    },
    Trader: {
        type: String,
        required:false,
        minlength: 7,
        maxlength: 15,
        unique:false
    },
    AuthorizedAgent: {
        type: String,
        required:false,
        minlength: 7,
        maxlength: 15,
        unique:false
    },
    ServiceProvider: {
        type: String,
        required:false,
        minlength: 7,
        maxlength: 15,
        unique:false
    },
    Other: {
        type: String,
        required:false,
        minlength: 7,
        maxlength: 15,
        unique:false
    },

});

const BusinessPofileModel = mongoose.model('businessprofile', BusinessSchema);

module.exports = BusinessPofileModel;