const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
    
    Customer: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    Location: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    BusinessPercent: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;