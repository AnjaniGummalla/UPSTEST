const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { body, check, validationResult } = require('express-validator');
//const ContractorFormDataModel = require("./../models/ContractorFormDataModel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
var fileupload = require('express-fileupload');
exports.create = [
  
    async(req, res, next) => {
        let request = req.body;
        console.log("input from postman", request);
        try {

              let Mainfields = 
              {

                "companyName": request.companyName,
                "dateOfEstablishment": request.dateOfEstablishment,
                "parentCompany": request.parentCompany,
                "address.email": request.email,
                //"address.tel": request.tel,
                "address.phone": request.phone,
                "address.Fax": request.Fax,
                "taxReferences.PanNo":request.PanNo ,
                "taxReferences.TinNo":request.TinNo ,
                "taxReferences.cstNo":request.cstNo,
                "taxReferences.serviceTaxNo":request.serviceTaxNo,
                "taxReferences.VaTno":request.VaTno ,
                "taxReferences.Others":request.Others,
                "Scale":request.Scale,
                "CompanyType":request.type,
                "contactDetailsMangement.ManagementName":request.ManagementName ,
                "contactDetailsMangement.ManagementDesignation":request.ManagementDesignation,
                "contactDetailsMangement.ManagementDepartment":request.ManagementDepartment,
                "contactDetailsMangement.ManagementContactDetails":request.ManagementContactDetails,
                "ContactDetailsSales.SalesName":request.SalesName,
                "ContactDetailsSales.SalesDesignation":request.SalesDesignation ,
                "ContactDetailsSales.SalesEmail":request.SalesEmail,
                "ContactDetailsSales.SalesDepartment":request.SalesDepartment,
                "ContactDetailsSales.SalesphoneNumber":request.SalesphoneNumber,
                "ContactDetailsSales.SaleLevel":request.SaleLevel,
                "ContactDetailsFinance.FinanceDetails": request.financeDetails,
                "ContactDetailsFinance.FinanceLevel" :request.fianceLevel,
                "productsDealing.Code": request.Code,
                "productsDealing.BusinessDescription" :request.BusinessDescription,
                "productsDealing.QualityStandard": request.QualityStandard,
                "BusinessProfile.Manufacturer": request.Manufacturer,
                "BusinessProfile.Trader" :request.Trader,
                "BusinessProfile.AuthorizedAgent": request.AuthorizedAgent,
                "BusinessProfile.ServiceProvider" :request.ServiceProvider,
                "BusinessProfile.BusinessOther": request.BusinessOther,
                "MajorCustomers.Customer": request.Customer,
                "MajorCustomers.Location" :request.Location,
                "MajorCustomers.percentage": request.percentage,
                "BankAccountDetails.AccountNumber": request.AccountNumber,
                "BankAccountDetails.RTGSIFSCCode" :request.RTGSIFSCCode,
                "BankAccountDetails.NEFTIFCSCode" :request.NEFTIFCSCode,
                "BankAccountDetails.MICRNO": request.MICRNO,
                "BankAccountDetails.PAN": request.PAN,
                "BankAccountDetails.AccoutnType": request.AccoutnType,
                "BankAccountDetails.BankAddress" :request.BankAddress,
                "BankAccountDetails.Branch" :request.Branch,
                "BankAccountDetails.BankName": request.BankName,
                "BankAccountDetails.BankCity": request.BankCity,
                "OtherInformation" : request.information,

            }
            let companyDetails = await ContractorFormDataModel.create(Mainfields);
            
            console.log(companyDetails);

            return res.status(200).json(companyDetails);
        } catch (err) {
            console.log(err)
            return res.json(500, __("server_error"));
        }
    }
];

exports.UpdateData = [

    async(req, res, next) => {
        let request = req.body;
        console.log("id from frontend",req.body);

        try {

           	ContractorFormDataModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(user);
        });

        } catch (e) {

            console.log(e)
            return res.error(500).json("server error");
        }

    }
];

exports.getList = [async(req, res, next) => {
    try {

        const userTypedata = await ContractorFormDataModel.find({}).populate('address');
  
        return res.status(200).json(userTypedata);
    } catch (err) {
         return res.status(500).json('server error');

}
}
];

exports.UploadFile = async function (req,res,next) {

  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/uploads/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
  });
};

exports.deleteData = [
 
    async(req, res, next) => {
        try {
        	const request = req.body;
            const a = await ContractorFormDataModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.data), (err, petDocument) => {})
            return res.status(200).json('Form deleted successfully');
        } catch (err) {
            console.log(err)
            return res.status(500).json('server error');
        }
    }
];