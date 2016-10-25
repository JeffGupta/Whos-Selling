var express = require('express');
var firebase = require('firebase');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.listen(port, function () {
	console.log(port);
});