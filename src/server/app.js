const express = require('express');
const API = require('./api/api');

module.exports = {
	bootstrap: function() {
		const app = express();
		app.use(express.static('build'));
		app.use('/api', API);
		return app;
	}
}