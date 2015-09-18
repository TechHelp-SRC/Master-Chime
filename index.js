var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/test', function(req, res) {

	res.send("this is a test");

});

app.get('/getTraffic', function(req, res) {

	// Create an array with number that represent 9am - 8pm

	//put it in a json object

	//send it back in the request

	

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//commit test
