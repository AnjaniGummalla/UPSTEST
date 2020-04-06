const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { body, check, validationResult } = require('express-validator');
const SuppilersDetailsModel = require("./../models/FormDataModel");
const crypto = require('crypto');
const bcrypt = require('bcrypt');


exports.create = [
  
    async(req, res, next) => {
        let request = req.body;
        try {

            let fields = {
                "companyName": request.companyName,
                "dateOfEstablishment": request.dateOfEstablishment,
                "parentCompany": request.parentCompany,
                "address": request.address,
                "taxReferences": request.taxReferences,
            }
            const company = await SuppilersDetailsModel.create(fields);

            return res.success(200, "Data Insertion success", company);
        } catch (err) {
            console.log(err)
            return res.error(500, __("server_error"));
        }
    }
];

exports.getList = [
    async(req, res, next) => {

        try {
            var params = req.body,
                query = datatablesQuery(SuppilersDetailsModel);
            query.run(params).then(function(data) {
                //res.json(data);
                return res.success(200, "", data);
            }, function(err) {
                console.log(err)
                return res.success(500, "", err);
            });

        } catch (err) {
            console.log(err)
            return res.error(500, __("server_error"));
        }


    }
];

exports.viewDetails = [
    async(req, res, next) => {

        try {
            var params = req.body,
                query = datatablesQuery(SuppilersDetailsModel);
            query.run(params).then(function(data) {
                //res.json(data);
                return res.success(200, "", data);
            }, function(err) {
                console.log(err)
                return res.success(500, "", err);
            });

        } catch (err) {
            console.log(err)
            return res.error(500, __("server_error"));
        }


    }
];
