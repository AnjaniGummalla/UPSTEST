const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const FinanceSchema = new Schema({
    
    Details: {
        type: String,
        required: false,
        lowercase: false,
        minlength: 3,
        maxlength: 80,
        unique: false
    },
    Level: {
        type: String,
        required: false,
        minlength: 7,
        maxlength: 15,
        unique: false
    },
});

const financeModel = mongoose.model('financeModel', FinanceSchema);

module.exports = financeModel;