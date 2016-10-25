var express = require('express');
//var gcloud = require('google-cloud');
var firebase = require('firebase');
var bodyParser = require('body-parser');
//var multer = require("multer");
//var uploader = multer({ storage: multer.memoryStorage({}) });
var app = express();
var port = process.env.PORT || 3000;

firebase.initializeApp({
	serviceAccount: "privkey.json",
	databaseURL: "https://whos-selling.firebaseio.com"
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});

//write to firebase given from data by account.js
app.post('/account', function (req, res) {
	firebase.database().ref('accounts/'+req.body.data.username).set({
		pass: req.body.data.pass,
		first_name: req.body.data.first_name,
		last_name: req.body.data.last_name,
		date_of_birth: req.body.data.date_of_birth,
		email: req.body.data.email,
		major: req.body.data.major
	});
});
