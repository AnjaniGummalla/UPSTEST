var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var BrandModel = require('./../models/BrandModel');
var TeamModel = require('./../models/TeamMaster');

router.post('/create', function(req, res) {

      BrandModel.create({
          BrandName : req.body.name,
        }, 
        function (err, Data) {
          if (err) return res.status(500).send("There was a problem registering the project`.");
          console.log("project details",Data)

          res.status(200).send(Data);
        });
});

router.get('/getlist', function (req, res) {
        BrandModel.find({}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem finding the Data.");
            res.status(200).send(Data);
        });
});
router.get('/view/:id', function (req, res) {
      BrandModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the Data.");
          if (!Data) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
});

router.put('/edit/:id', function (req, res) {
      BrandModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });
});
// DELETES A USER FROM THE DATABASE
router.delete('/delete/:id', function (req, res) {
    BrandModel.findByIdAndRemove(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem deleting the Data.");
          res.status(200).send("Deleted Successfully");
      });
});

module.exports = router;