var express = require('express');
var router = express.Router();
var contractorFormData = require('./../controllers/ContractorData');
/* GET users listing. */
/* Contractor routers */
router.post('/create',contractorFormData.create);
router.get('/getList',contractorFormData.getList);
router.put('/editData/:id',contractorFormData.UpdateData);
router.get('/viewData/:id',contractorFormData.viewData);
router.delete('/formdelete/:data',contractorFormData.deleteData);

module.exports = router;
