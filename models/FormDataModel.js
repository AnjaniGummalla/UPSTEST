const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SoftDeletePlugin = require('mongoose-delete');
const FormSchema = new Schema({
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
    email: { type: String },
    //tel: { type: String },
    phone: { type: String },
    Fax: { type: String },
    },

    taxReferences: {   
    PanNo: { type: String },
    TinNo: { type: String },
    cstNo: { type: String },
    serviceTaxNo: { type: String },
    VaTno: { type: String },
    Others:  {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 1000
    },
    },
    Scale: {
        type: String,
    },
    CompanyType: {
        type: String,
        //default: ""
    },
    contactDetailsMangement: {   
    ManagementName: { type: String },
    ManagementDesignation:{
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 1000
    },
    ManagementDepartment: { type: String },
    ManagementContactDetails: { type: String },
    },
    ContactDetailsSales: {
    SalesName: { type: String },
    SalesDesignation: {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 1000
    },
    SalesEmail: { type: String },
    SalesDepartment: { type: String },
    SalesphoneNumber: { type: String },
    SaleLevel: { type: String },
	}, 
	ContactDetailsFinance: {
    FinanceDetails: { type: String },
    FinanceLevel: { type: String },
	},
	productsDealing: {
    Code: { type: String },
    BusinessDescription: {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 1000
    },
    QualityStandard: { type: String },
	}, 

	BusinessProfile: {
	Manufacturer: { type: String },
    Trader: { type: String },
    AuthorizedAgent: { type: String },
    ServiceProvider: { type: String },
    BusinessOther: { type: String },
	},
	MajorCustomers:{
	Customer: { type: String },
    Location: { type: String },
    percentage: { type: String },
	},
	BankAccountDetails:{
	AccountNumber: { type: String },
    BankCity: { type: String },
    BankName: { type: String },
    Branch: { type: String },
    BankAddress: { type: String },
    AccoutnType: { type: String },
    RTGSIFSCCode: { type: String },
    NEFTIFCSCode: { type: String },
    MICRNO: { type: String },
    PanNo: { type: String },
	},
	OtherInformation:{
		type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
	},
},
 {collection:'formdata'});


const FormModel = mongoose.model('Form', FormSchema);

FormSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = FormModel;