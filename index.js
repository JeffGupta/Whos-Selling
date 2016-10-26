var express = require('express');
//var gcloud = require('google-cloud');
var firebase = require('firebase');
var bodyParser = require('body-parser');
//var multer = require("multer");
//var uploader = multer({ storage: multer.memoryStorage({}) });
var app = express();
var port = process.env.PORT || 3000;

//Code for Upload
var express = require('express');
var app2 = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');


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

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
