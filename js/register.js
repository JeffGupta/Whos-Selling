$(document).ready(function() {
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
	
	$('#registersubmit').click(function()
	{
		var username = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
		var first = document.getElementById("first").value;
		var last = document.getElementById("last").value;
		var dob = document.getElementById("dob").value;
		var email = document.getElementById("email").value;
		var major = document.getElementById("major").value;
		
		var exists = checkexisting(username,email);
		
		if(exists == true)
		{
			var registeralert = document.getElementById("registeralert");
			registeralert.innerHTML = "Username is already in use";
		}
		else
		{
			addaccount(username,pass,first,last,dob,email,major);
		}
	});
		
	function checkexisting(username, email)
	{		
		accountRef.child(username).once('value',function(snapshot)
		{
			var usernameexists = (snapshot.val() !== null);
			
			return usernameexists;
		});
	}
		
	function addaccount(username,pass,first,last,dob,email,major)
	{
		firebase.database().ref('accounts/'+username).set({
			pass: pass,
			first_name: first,
			last_name: last,
			date_of_birth: dob,
			email: email,
			major: major
		});
	}
});