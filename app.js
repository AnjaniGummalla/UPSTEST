var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var suppilersRouter = require('./routes/suppilers.routes');
var contractorsRouter = require('./routes/contractors.routes');
var ItemRouter = require('./routes/Item.routes');
var UOMRouter = require('./routes/UOM.routes');
var CatageoryRouter = require('./routes/catagory.routes');
var BrandRouter = require('./routes/brand.routes');
var RegionRouter = require('./routes/region.routes');
var TeamRouter = require('./routes/teamMaster.routes');

var fileUpload = require('express-fileupload');
var app = express();

app.use(fileUpload());

app.post('/upload', function(req, res) {
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

     res.status(200).json(uploadPath);
  });
});

// Database Module
//const Mongoose = require("./database/dbconnection");
mongoose.connect('mongodb://localhost:27017/UPSsuppliers', {useNewUrlParser: true})
    .then(()=>console.log("DB server connect"))
    .catch(e => console.log("DB error", e));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', suppilersRouter);
app.use('/contract', contractorsRouter);
app.use('/item', ItemRouter);
app.use('/UOM', UOMRouter);
app.use('/catageory', CatageoryRouter);
app.use('/brand', BrandRouter);
app.use('/region', RegionRouter);
app.use('/team', TeamRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;