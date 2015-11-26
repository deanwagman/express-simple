
var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuth: function(request, response, next) {
		console.log('Private route was hit');
		next();
	},
	logger: function(request, response, next) {
		console.log(`Request: ${request.method} ${request.originalUrl} at ${new Date().toString()}`);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuth, function(request, response) {
	response.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Starting Node Server');
	console.log(`Port: ${PORT}`);
});