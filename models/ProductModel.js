const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    
    Code: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    Description: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
    QualityStandard: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;