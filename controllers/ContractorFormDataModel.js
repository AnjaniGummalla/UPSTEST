const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var SoftDeletePlugin = require('mongoose-delete');
const ContractorFormSchema = new Schema({
    companyName: {

        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
     Labours: {
       type: Schema.Types.ObjectId,
       ref: 'labour',
       //required: true
    },
    Machineries: {
       type: Schema.Types.ObjectId,
       ref: 'labour',
       //required: true
    },
   address: {
    email: { type: String },
    phone: { type: String },
    Fax: { type: String },
    },

    ProperitorName: {
        type: String,
    },
    TelephoneNo: {
        type: String,
        //default: ""
    },

    TypeofWork: {   
   type: String
    },

    WorkExperienceinYears: {
    type:String
    },

	ProjectManagerApproval: {
    type:String
    },

	PhysicalInspection: {
    type:String
    },

	PanNo:{
    type:String
    },

	BankDetails:{
	BankName : { type: String },
    AccountNo: { type: String },
	},

	GSTRegistrationNo:{
		type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
	},

    ESINo:{
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    ESIAgree {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    HR {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    ESIdeduction {
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    Office {
    Contr.RegistrationNo: { type: String },
    Date: { type: Date },
    Valid: { type: Date },
    Location: { type: String },
    },
 {collection:'contractorData'});


const ContractorFormModel = mongoose.model('ContractorForm', ContractorFormSchema);

FormSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = ContractorFormModel;