const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { body, check, validationResult } = require('express-validator');
const SuppilersDetailsModel = require("./../models/FormDataModel");
const AddressModel = require("./../models/addressModel");
const CustomerModel = require("./../models/CustomerModel");
const TaxModel = require("./../models/TaxModel");
const SalesModel = require("./../models/salesModel");
const ProductModel = require("./../models/ProductModel");
const MangementModel = require("./../models/managementModel");
const FinanceModel = require("./../models/FinanceModel");
const BusinessprofileModel = require("./../models/BusinessprofileModel");
const AccountDetailsModel = require("./../models/AccountDetailsModel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');

exports.create = [
  
    async(req, res, next) => {
        let request = req.body;
        console.log("input from postman", request);
        try {

            //console.log("values inserted in the DB", companyDetails);
            let addressField = {
             	"email" : request.email,
             	"tel" : request.tel,
             	"phone" :request.phone,
             	"country":request.company,
             }

             const address = await AddressModel.create(addressField);

              let addressID = address._id;
             
             let taxField = {
             	"PanNo": request.PanNo,
             	"TinNo" :request.TinNo,
             	"cstNo" : request.cstNo,
             	"serviceTaxNo":request.serviceTaxNo,
             	"VaTnO" : request.VaTnO,
             	"Others":request.Others,

             }
             const taxdetails = await TaxModel.create(taxField);
              let taxid = taxdetails._id;

             let managementField = {
             	"Name": request.managementName,
             	"Designation" :request.managementDesignation,
             	"Department" : request.managementDepartment,
             	"ContactDetails":request.managementDetails,
             }
             const management = await MangementModel.create(managementField);
             let managementid = management._id;

              let salesField = {
             	"Name": request.salesName,
             	"Designation" :request.salesDesignation,
             	"Department" : request.salesDepartment,
             	"email":request.saleEmail,
             	"phoneNumber":request.salephoneNumber,
             	"level":request.saleLevel,
             }
             const salesDetails = await SalesModel.create(salesField);
             let salesid = salesDetails._id;

             let financeField = {
             	"Details": request.financeDetails,
             	"level" :request.fianceLevel,
             }
             const finance = await FinanceModel.create(financeField);
             let financeid = finance._id;

              let BusinessporfileField = {

             	"Manufacturer": request.Manufacturer,
             	"Trader" :request.Trader,
             	"AuthorizedAgent": request.AuthorizedAgent,
             	"ServiceProvider" :request.ServiceProvider,
             	"Other": request.Other,
             }
             const businessdetails = await BusinessprofileModel.create(BusinessporfileField);
             let businessprofileid = businessdetails._id;
              let productField = {

             	"Code": request.Code,
             	"Description" :request.Description,
             	"QualityStandard": request.QualityStandard,
             }
             const productdetails = await ProductModel.create(productField);
             let productid = productdetails._id;
              let majorcustomerField = {

             	"Customer": request.Customer,
             	"Location" :request.Location,
             	"QualityStandard": request.BusinessPercent,
             }
             const majorcustomerdetails = await AccountDetailsModel.create(majorcustomerField);
              let customersid = majorcustomerdetails._id;

              let AccountDetailsField = {
             	"AccountNumber": request.AccountNumber,
             	"RTGSIFSCCode" :request.RTGSIFSCCode,
             	"NEFTIFCSCode" :request.NEFTIFCSCode,
             	"MICRNO": request.MICRNO,
             	"PAN": request.PAN,
             }

             const accountdetails = await CustomerModel.create(AccountDetailsField);
              let accountsid = accountdetails._id;
              let Mainfields = 
              {

                "companyName": request.companyName,
                "dateOfEstablishment": request.dateOfEstablishment,
                "parentCompany": request.parentCompany,
                "address": addressID,
                "taxreference":taxid,
                "Scale":request.Scale,
                "companyType":request.type,
                "contactDetailsMangement":managementid,
                "ContactDetailsSales":salesid,
                "ContactDetailsFinance":financeid,
                "businessProfile":businessprofileid,
                "productsDealing":productid,
                "majorCustomers": customersid,
                "bankAccountDetails":accountsid,
                "OtherInformation" : request.information,

            }
            let companyDetails = await SuppilersDetailsModel.create(Mainfields);
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
        console.log("id from frontend",request);
        //let user = req.user;
        	const fields = {

            	"companyName": request.companyName,
                "dateOfEstablishment": request.dateOfEstablishment,
                "parentCompany": request.parentCompany,
                "address": request.address,
                "taxreference":request.taxReferences,
                "Scale":request.Scale,
                "companyType":request.type,
                "contactDetailsMangement":request.contactDetailsMangement,
                "ContactDetailsSales":request.ContactDetailsSales,
                "ContactDetailsFinance":request.ContactDetailsFinance,
                "businessProfile":request.businessProfile,
                "productsDealing":request.productsDealing,
                "majorCustomers": request.majorCustomers,
                "bankAccountDetails":request.bankAccountDetails,
                "OtherInformation" : request.information,
       		 }
        	 let accountsfields = {
             	"AccountNumber": request.AccountNumber,
             	"RTGSIFSCCode" :request.RTGSIFSCCode,
             	"NEFTIFCSCode" :request.NEFTIFCSCode,
             	"MICRNO": request.MICRNO,
             	"PAN": request.PAN,
             }
              let addressFields = {
             	"email" : request.email,
             	"tel" : request.tel,
             	"phone" :request.phone,
             	"country":request.company,
             }
             
             let taxfields = {
             	"PanNo": request.PanNo,
             	"TinNo" :request.TinNo,
             	"cstNo" : request.cstNo,
             	"serviceTaxNo":request.serviceTaxNo,
             	"VaTnO" : request.VaTnO,
             	"Others":request.Others,

             }
             
             let managementfields = {
             	"Name": request.managementName,
             	"Designation" :request.managementDesignation,
             	"Department" : request.managementDepartment,
             	"ContactDetails":request.managementDetails,
             }

              let salesfields = {
             	"Name": request.salesName,
             	"Designation" :request.salesDesignation,
             	"Department" : request.salesDepartment,
             	"email":request.saleEmail,
             	"phoneNumber":request.salephoneNumber,
             	"level":request.saleLevel,
             }

             let financefields = {
             	"Details": request.financeDetails,
             	"level" :request.fianceLevel,
             }
            
              let businessfields = {

             	"Manufacturer": request.Manufacturer,
             	"Trader" :request.Trader,
             	"AuthorizedAgent": request.AuthorizedAgent,
             	"ServiceProvider" :request.ServiceProvider,
             	"Other": request.Other,
             }
             
              let productfields = {

             	"Code": request.Code,
             	"Description" :request.Description,
             	"QualityStandard": request.QualityStandard,
             }
             
              let customerfields = {

             	"Customer": request.Customer,
             	"Location" :request.Location,
             	"QualityStandard": request.BusinessPercent,
             }

        try {
            let addressData = await AddressModel.findByIdAndUpdate(request.address, addressFields, { upsert: true, new: true });
           	let customerData = await CustomerModel.findByIdAndUpdate(request.majorCustomers, customerfields, { upsert: true, new: true });
           	let taxData = await TaxModel.findByIdAndUpdate(request.taxReferences, taxfields, { upsert: true, new: true });
           	let salesData = await SalesModel.findByIdAndUpdate(request.ContactDetailsSales, salesfields, { upsert: true, new: true });
           	let productData = await ProductModel.findByIdAndUpdate(request.productsDealing, productfields, { upsert: true, new: true });
           	let managementData = await MangementModel.findByIdAndUpdate(request.contactDetailsMangement, managementfields, { upsert: true, new: true });
           	let financeData = await FinanceModel.findByIdAndUpdate(request.ContactDetailsFinance, financefields, { upsert: true, new: true });
           	let businessData = await BusinessprofileModel.findByIdAndUpdate(request.businessProfile, businessfields, { upsert: true, new: true });
           	let accountData = await AccountDetailsModel.findByIdAndUpdate(request.bankAccountDetails, accountsfields, { upsert: true, new: true });
           	let EditData = await SuppilersDetailsModel.findByIdAndUpdate(request.id, fields, { upsert: true, new: true });
             return res.status(200).json(EditData);

        } catch (e) {

            console.log(e)
            return res.error(500).json("server error");
        }

    }
];

exports.getList = [async(req, res, next) => {
    try {

        const userTypedata = await SuppilersDetailsModel.find({}).populate('address');
  
        return res.status(200).json(userTypedata);
    } catch (err) {
         return res.status(500).json('server error');

}
}
];
exports.deleteData = [
 
    async(req, res, next) => {
        try {
        	const request = req.body;
            const a = await SuppilersDetailsModel.findByIdAndRemove(mongoose.Types.ObjectId(req.params.data), (err, petDocument) => {})
            return res.status(200).json('Form deleted successfully');
        } catch (err) {
            console.log(err)
            return res.status(500).json('server error');
        }
    }
];