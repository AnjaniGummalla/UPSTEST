const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    dateOfEstablishment: {
        type: Date,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    parentCompany: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    address: {
         type: Schema.Types.ObjectId,
        ref: 'address',
        required: true
    },
    taxReferences: {
        type: Schema.Types.ObjectId,
        ref: 'tax',
        required: true
    },
    Scale: {
        type: String,
    },
    expireAt: {
        type: Date,
        required: true
    },
    companyType: {
        type: String,
        default: ""
    },
    contactDetailsMangement: {
       type: Schema.Types.ObjectId,
        ref: 'management',
        required: true
    },
    ContactDetailsSales: {
    	type: Schema.Types.ObjectId,
        ref: 'sales',
        required: true
	}, 
	ContactDetailsFinance: {
    	type: Schema.Types.ObjectId,
        ref: 'finance',
        required: true
	},
	businessProfile: {
    	type: Schema.Types.ObjectId,
        ref: 'businessProfile',
        required: true
	}, 

	productsDealing:{
		type: Schema.Types.ObjectId,
        ref: 'productsDealing',
        required: true
	},
	majorCustomers:{
		type: Schema.Types.ObjectId,
        ref: 'productsDealing',
        required: true
	},
	bankAccountDetails:{
		type: Schema.Types.ObjectId,
        ref: 'bankAccountDetails',
        required: true
	},
	OtherInformation:{
		type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
	},
	{
    timestamps: true
});

const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = CompanyModel;