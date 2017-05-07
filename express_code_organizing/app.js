var express = require('express');
var mongoose = require('mongoose');
var app = express();

// Connect to mongo db 
mongoose.connect('mongodb://admin:admin123@ds133221.mlab.com:33221/employee_test');

// Define the schema
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
	firstname: String,
	lastname: String,
	employeeid: String
});

// Models are defined through the Schema interface.
var Employee =  mongoose.model('Employee', employeeSchema);

var neo = Employee({
	firstname: 'Neo',
	lastname: 'Anderson',
	employeeid: '007'
});

neo.save(function(err) {
	if(err) throw err;
	console.log('A new employee saved');
});

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	Employee.find({ firstname: 'Neo'}, (err, users) => {
		if(err) throw err;
		console.log(users);
	});
	next();
});

htmlController(app);

apiController(app);

app.listen(port);