var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/MasterChime");

//Import routes modules
var main = require('./routes/index');
var traffic = require('./routes/traffic');

var app = express();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(__dirname + '/public'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');



//Setup Routes

app.use('/', main);
app.use('/traffic', traffic);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//commit test
