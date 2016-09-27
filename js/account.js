$(document).ready(function()
{
	// Initialize Firebase
	"use strict";
	var config = {
		apiKey: "AIzaSyCowZvhT-bUUoBd0xZv1OTW9Q1tNxZxRGk",
		authDomain: "whos-selling.firebaseapp.com",
		databaseURL: "https://whos-selling.firebaseio.com",
		storageBucket: "",
		messagingSenderId: "512922207100"
	};
	firebase.initializeApp(config);
	
	var accountRef = firebase.database().ref('accounts');
	
	putaccount();
	
	function putaccount()
	{
		console.log(document.cookie);
		var username = getCookie("username");
		accountRef.child(username).once('value')
			.then(function(snapshot){
				return snapshot.val();
			})
			.then(function(snapshot){
				var userlabel = document.getElementById("userlabel");
				var fnamelabel = document.getElementById("fnamelabel");
				var lnamelabel = document.getElementById("lnamelabel");
				var doblabel = document.getElementById("doblabel");
				var emaillabel = document.getElementById("emaillabel");
				var majorlabel = document.getElementById("majorlabel");
				
				userlabel.innerHTML = "Username: "+username;
				fnamelabel.innerHTML = "First name: "+snapshot.first_name;
				lnamelabel.innerHTML = "Last name: "+snapshot.last_name;
				doblabel.innerHTML = "Date of birth: "+snapshot.date_of_birth;
				emaillabel.innerHTML = "email: "+snapshot.email;
				majorlabel.innerHTML = "major: "+snapshot.major;
			})
			.catch(function(error){
				console.log("error");
			});
	}
	
	function getCookie(name)
	{
		var re = new RegExp(name + "=([^;]+)");
		var value = re.exec(document.cookie);
		return (value != null) ? unescape(value[1]) : null;
	}
});