// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var configuration = require("./appconfig.json");

// App Instance
var app = express();

// Enviroment Setting
var enviroment = configuration.enviroment;
if (enviroment == 'develop') {
  var routes = require(configuration.development.pathToApi);
}else{
  var routes = require(configuration.production.pathToApi);
}

// Server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
var server = app.listen(configuration.apiPort, function () {
  // Information Display
  var message = 'APP Running at ' + server.address().port;
  console.log(message);
});
