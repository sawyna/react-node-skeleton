const express = require('express');

const api = express();

/*
Add a middleware for API auth
*/

api.get('/username', function(req, res) {
	res.send({"username": "Yaswanth from db"});	
});

module.exports = api;