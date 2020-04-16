var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var TeamModel = require('./../models/TeamMaster');
var ItemModel = require('./../models/ItemModel');
router.post('/createteam', function(req, res) {
  var test = [{"weekdays": ["HAI" ,"NEW" ,"INSEERTED"]}];
  var test2 = {"week": ["1" ,"2" ,"3"]};
for (var key in req.body) {
  if (req.body.hasOwnProperty(key)) {
    item = req.body[key];
    console.log(item);
  }
}
  //var JsonVALUES = JSON.parse(test);
  
      TeamModel.create({
           corespec1:req.body[0].corespec1,
           corespec2:req.body[1].corespec2,
           capacity:req.body[2].capacity,
           variablespec:req.body[3].variablespec,
           optionalspec:req.body[4].optionalspec,
           selecteditemcode:req.body[5].selecteditemcode
        }, 
        function (err, Data) {
          if (err) return res.status(500).send("There was a problem registering the Data.");
          console.log("Details",Data)

          res.status(200).send(Data);
        });
});
router.get('/getlist', function (req, res) {
        TeamModel.find({}, function (err, Data) {
            if (err) return res.status(500).send("There was a problem finding the Data.");
            res.status(200).send(Data);
        });
});
router.get('/view/:id', function (req, res) {
      TeamModel.findById(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem finding the Data.");
          if (!Data) return res.status(404).send("No Data found.");
          res.status(200).send(Data);
      });
});

router.put('/edit/:id', async function (req, res) {
      var Itemcode = await TeamModel.find({selecteditemcode:req.body.itemcode});
      if(Itemcode!=null)
      TeamModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Data) {
      if (err) return res.status(500).send("There was a problem updating the Data.");
            res.status(200).send(Data);
        });
    else
      res.status(402).send("Data not available with the requested Itemcode");
});
// DELETES A USER FROM THE DATABASE
router.delete('/delete/:id', function (req, res) {
    TeamModel.findByIdAndRemove(req.params.id, function (err, Data) {
          if (err) return res.status(500).send("There was a problem deleting the Data.");
          res.status(200).send("Deleted Successfully");
      });
});

module.exports = router;