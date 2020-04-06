const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    dateOfEstablishment: {
        type: Date,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    parentCompany: {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    address: {
         type: Schema.Types.ObjectId,
        ref: 'address',
        required: false
    },
    taxReferences: {
        type: Schema.Types.ObjectId,
        ref: 'tax',
        required: false
    },
    Scale: {
        type: String,
    },
    companyType: {
        type: String,
        default: ""
    },
    contactDetailsMangement: {
       type: Schema.Types.ObjectId,
        ref: 'management',
        required: false
    },
    ContactDetailsSales: {
    	type: Schema.Types.ObjectId,
        ref: 'sales',
        required: false
	}, 
	ContactDetailsFinance: {
    	type: Schema.Types.ObjectId,
        ref: 'finance',
        required: false
	},
	businessProfile: {
    	type: Schema.Types.ObjectId,
        ref: 'businessProfile',
        required: false
	}, 

	productsDealing:{
		type: Schema.Types.ObjectId,
        ref: 'product',
        required: false
	},
	majorCustomers:{
		type: Schema.Types.ObjectId,
        ref: 'customer',
        required: false
	},
	bankAccountDetails:{
		type: Schema.Types.ObjectId,
        ref: 'accountdetails',
        required: false
	},
	OtherInformation:{
		type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
	},
});


const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = CompanyModel;