
var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(request, response) {
	response.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Starting Node Server');
	console.log(`Port: ${PORT}`);
});