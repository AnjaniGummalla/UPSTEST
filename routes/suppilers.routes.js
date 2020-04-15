var express = require('express');
var router = express.Router();
var suppilersFormData = require('./../controllers/supilersdata');
var contractorFormData = require('./../controllers/ContractorData');
//var Helper = require('./../helpers/common.helper');
var fileUpload = require('express-fileupload');
//var app = express();
router.use(fileUpload());
/* Suppilers routers. */
router.post('/create',suppilersFormData.create);
router.get('/getList',suppilersFormData.getList);
router.put('/editData/:id',suppilersFormData.UpdateData);
router.delete('/formdelete/:data',suppilersFormData.deleteData);

module.exports = router;