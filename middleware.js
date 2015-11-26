module.exports = {
	requireAuth: function(request, response, next) {
		console.log('Private route was hit');
		next();
	},
	logger: function(request, response, next) {
		console.log(`Request: ${request.method} ${request.originalUrl} at ${new Date().toString()}`);
		next();
	}
};