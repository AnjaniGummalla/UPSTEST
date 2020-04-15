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
       ref: 'Labours',
       //required: true
    },
    Machineries: {
       type: Schema.Types.ObjectId,
       ref: 'Machineries',
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
    ESIAgree:{

        type: Boolean,

    },

    HR:{
        type: String,
        required: false,
        trim: false,
        minlength: 3,
        maxlength: 80
    },
    ESIdeduction:
    {
        type: Boolean,
    },
    Office:
    {
    RegistrationNo: { type: String },
    Date: { type: Date },
    Valid: { type: Date },
    Location: { type: String },
    },
 
 });


const ContractorFormModel = mongoose.model('ContractorForm', ContractorFormSchema);

ContractorFormSchema.plugin(SoftDeletePlugin, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

module.exports = ContractorFormModel;