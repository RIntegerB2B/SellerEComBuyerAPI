var express = require('express'),
  app = express(),
  port = process.env.PORT || 3010,
  bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());
var accountRoutes = require('./account/buyerAccountRoute'); //importing route
accountRoutes(app);
app.listen(port);


var mongoDbConfig = require('./config/mongoDatabase.config');
var mongoose = require('mongoose');

mongoose.connect(mongoDbConfig.url, {
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
app.get('/listUsers', function (req, res) {
  res.end( "Asd" );
})



console.log('Seller ECom RESTful API server started on: ' + port);

