var express = require('express');
var router = express.Router();
var suppilersFormData = require('./../controllers/supilersdata');

/* GET home page. */
router.post('/create',suppilersFormData.create);
router.get('/getList',suppilersFormData.getList);
router.get('/View',suppilersFormData.viewDetails);

module.exports = router;