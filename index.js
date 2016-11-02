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
	if(req.body.data.isgoogle != null) {
		firebase.database().ref('googles/'+emailToKey(req.body.data.email)).set({
		name: req.body.data.name
		});
	}
	else {
		firebase.database().ref('accounts/'+req.body.data.username).set({
		pass: req.body.data.pass,
		first_name: req.body.data.first_name,
		last_name: req.body.data.last_name,
		date_of_birth: req.body.data.date_of_birth,
		email: req.body.data.email,
		major: req.body.data.major
		});
	}
});
//code for upload
//////////////////////////
var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/upload.html'));
});

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/account');

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
/////////////////////////////
//code for google cloud
var gcloud = require('google-cloud');
//var multer = require("multer");
//var uploader = multer({ storage: multer.memoryStorage({}) });

var gcs = gcloud.storage({
    projectId: '512922207100', //from storage console, then click settings, then "x-goog-project-id" added my own
    keyFilename: 'privkey.json' //the key we already set up in firebase
});

function getPublicUrl (filename) {
    return 'https://storage.googleapis.com/' + CLOUD_BUCKET + '/' + filename;
}

//From https://cloud.google.com/nodejs/getting-started/using-cloud-storage
function sendUploadToGCS (req, res, next) {
    if (!req.file) {
        return next();
    }

    var gcsname = Date.now() + req.file.originalname;
    var file = bucket.file(gcsname);


    var stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    });

    stream.on('error', function (err) {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', function () {
        req.file.cloudStorageObject = gcsname;
        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
        var options = {
            entity: 'allUsers',
            role: gcs.acl.READER_ROLE
        };
        file.acl.add(options, function(a,e){next();});//Make file world-readable; this is async so need to wait to return OK until its done
    });

    stream.end(req.file.buffer);
}

function emailToKey(emailAddress) {
		return emailAddress.replace(/[.]/g, '%20');
}

