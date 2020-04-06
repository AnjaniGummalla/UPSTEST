//require mongoose module
var mongoose = require('mongoose');

//require chalk module to give colors to console text
var chalk = require('chalk');

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

var mongoDB = 'mongodb://localhost/Suppilers';
mongoose.connect(mongoDB, { useNewUrlParser: true });

    mongoose.connection.on('connected', function() {
        console.log(connected("Mongoose default connection is open to ", mongoDB));
    });

    mongoose.connection.on('error', function(err) {
        console.log(error("Mongoose default connection has occured " + err + " error"));
    });

    mongoose.connection.on('disconnected', function() {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    module.exports = mongoose;