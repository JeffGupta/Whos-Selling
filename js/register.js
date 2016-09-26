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
		var username = document.getElementById("username");
		var pass = document.getElementById("password");
		var first = document.getElementById("first");
		var last = document.getElementById("last");
		var dob = document.getElementById("dob");
		var email = document.getElementById("email");
		var major = document.getElementById("major");
		
		addaccount(username,pass,first,last,dob,email,major);
	});
		
	function checkexisting(username, email)
	{
			
	}
		
	function addaccount(username,pass,first,last,dob,email,major)
	{
		firebase.database().ref('users/'+username).set({
			pass: pass,
			first_name: first,
			last_name: last,
			date_of_birth: dob,
			email: email,
			major: major
		});
	}
});