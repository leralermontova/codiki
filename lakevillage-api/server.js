var express = require('express'),
  app = express(),
  port =  3001,
  mongoose = require('mongoose'),
  House = require('./api/models/lakevillageModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lakevillagedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/lakevillageRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('lakevillage list RESTful API server started on: ' + port);