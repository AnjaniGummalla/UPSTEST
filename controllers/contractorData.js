const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { body, check, validationResult } = require('express-validator');
const ContractorFormDataModel = require("./../models/ContractorFormDataModel");
const LabourModel = require("./../models/LabourModel");
const MachineriesModel = require("./../models/MachineriesModel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
var fileupload = require('express-fileupload');

exports.create = [
  
    async(req, res, next) => {
        let request = req.body;
        console.log("input from postman", request);
        try {

            let labourFields = {

                "Welders.Description" : request.Weldersdesc,
                "Welders.No" : request.WeldersNo,
                "Welders.AvgExperience" : request.WAvgExperience,
                "Fitters.Description" : request.Fittersdesc,
                "Fitters.No" : request.FittersNo,
                "Fitters.AvgExperience" : request.FAvgExperience,
                "Helpers.Description" : request.Helpersdesc,
                "Helpers.No" : request.HelpersNo,
                "Helpers.AvgExperience" : request.HelpersAvgExperience,
                "Fabricators.Description" : request.Fabricatorsdesc,
                "Fabricators.No" : request.FabricatorsNo,
                "Fabricators.AvgExperience" : request.FabricatorsAvgExperience,
                "Riggers.Description" : request.Riggersdesc,
                "Riggers.No" : request.RiggersNo,
                "Riggers.AvgExperience" : request.RiggersAvgExperience,
                "Others.Description" : request.Othersdesc,
                "Others.No" : request.OthersNo,
                "Others.AvgExperience" : request.OthersAvgExperience,
             }

             const labour = await LabourModel.create(labourFields);

              let labourID = labour._id;

               let MachineriesFields = {
                "WeldingMc.Description" : request.WeldingMcDesc,
                "WeldingMc.No" : request.WeldingMcNo,
                "WeldingMc.Condition" : request.WCondition,
                "DrillingMc.Description" : request.DrillingMcDesc,
                "DrillingMc.No" : request.DrillingMcNo,
                "DrillingMc.Condition" : request.DrillingMcNo,
                "Weldingtourch.Description" : request.WeldingtourchDesc,
                "Weldingtourch.No" : request.WeldingtourchNo,
                "Weldingtourch.Condition" : request.WeldingtourchNo,
             }

             const machineries = await MachineriesModel.create(MachineriesFields);

              let machineriesID = machineries._id;

              let Mainfields = 
              {

                "companyName": request.companyName,
                "Labours": labourID,
                "Machineries": machineriesID,
                "address.email": request.email,
                "address.phone": request.phone,
                "address.Fax": request.Fax,
                "ProperitorName" : request.ProperitorName,
                "TelephoneNo" : request.TelephoneNo,
                "TypeofWork" : request.TypeofWork,
                "WorkExperienceinYears" : request.WorkExperienceinYears,
                "ProjectManagerApproval" : request.ProjectManagerApproval,
                "PhysicalInspection" : request.PhysicalInspection,
                "PanNo" : request.PanNo,
                "GSTRegistrationNo" : request.GSTRegistrationNo,
                "ESINo" : request.ESINo,
                "ESIAgree" : request.ESIAgree,
                "HR" : request.HR,
                "ESIdeduction" : request.ESIdeduction,
                "Office.RegistrationNo": request.RegistrationNo,
                "Office.Date": request.Date,
                "Office.Valid": request.Valid,
                "Office.Location": request.Location,

            }
            let contractorDetails = await ContractorFormDataModel.create(Mainfields);
            
            console.log(contractorDetails);

            return res.status(200).json(contractorDetails);
        } catch (err) {
            console.log(err)
            return res.json(500, __("server_error"));
        }
    }
];


exports.UpdateData = [

    async (req, res, next) => {
        let request = req.body;
        console.log("id from frontend",req.body);
         
         let labourFields = {

                "Welders.Description" : request.Weldersdesc,
                "Welders.No" : request.WeldersNo,
                "Welders.AvgExperience" : request.WAvgExperience,
                "Fitters.Description" : request.Fittersdesc,
                "Fitters.No" : request.FittersNo,
                "Fitters.AvgExperience" : request.FAvgExperience,
                "Helpers.Description" : request.Helpersdesc,
                "Helpers.No" : request.HelpersNo,
                "Helpers.AvgExperience" : request.HelpersAvgExperience,
                "Fabricators.Description" : request.Fabricatorsdesc,
                "Fabricators.No" : request.FabricatorsNo,
                "Fabricators.AvgExperience" : request.FabricatorsAvgExperience,
                "Riggers.Description" : request.Riggersdesc,
                "Riggers.No" : request.RiggersNo,
                "Riggers.AvgExperience" : request.RiggersAvgExperience,
                "Others.Description" : request.Othersdesc,
                "Others.No" : request.OthersNo,
                "Others.AvgExperience" : request.OthersAvgExperience,
             }

               let MachineriesFields = {
                
                "WeldingMc.Description" : request.WeldingMcDesc,
                "WeldingMc.No" : request.WeldingMcNo,
                "WeldingMc.Condition" : request.WCondition,
                "DrillingMc.Description" : request.DrillingMcDesc,
                "DrillingMc.No" : request.DrillingMcNo,
                "DrillingMc.Condition" : request.DrillingMcNo,
                "Weldingtourch.Description" : request.WeldingtourchDesc,
                "Weldingtourch.No" : request.WeldingtourchNo,
                "Weldingtourch.Condition" : request.WeldingtourchNo,
             }

        try {
            let Machineries = await MachineriesModel.findByIdAndUpdate(request.Machineries, MachineriesFields, { upsert: true, new: true });
            let Labours = await LabourModel.findByIdAndUpdate(request.Labours, labourFields, { upsert: true, new: true });
           	await ContractorFormDataModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });

        } catch (e) {

            console.log(e)
            return res.error(500).json("server error");
        }

    }
];
exports.viewData = [

    async(req, res, next) => {
        let request = req.body;
        console.log("id from frontend",req.body);

        try {

          ContractorFormDataModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the user.");
          if (!Data) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
        } catch (e) {

            console.log(e)
            return res.error(500).json("server error");
        }

    }
];
exports.getList = [async(req, res, next) => {
    try {

        const userTypedata = await ContractorFormDataModel.find({}).populate('Machineries Labours');
  
        return res.status(200).json(userTypedata);
    } catch (err) {
         return res.status(500).json('server error');

}
}
];

exports.deleteData = [
 
    async(req, res, next) => {
        try {
        	ContractorFormDataModel.findByIdAndRemove(req.params.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
          res.status(200).send("Successfull Deletion.");
      });
        } catch (err) {
            console.log(err)
            return res.status(500).json('server error');
        }
    }
];