const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const TaxSchema = new Schema({
    
    PanNo: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    TinNo: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    cstNo: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    serviceTaxNo: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
     VaTnO: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
     Others: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },

});

const TaxModel = mongoose.model('Tax', TaxSchema);

module.exports = TaxModel;