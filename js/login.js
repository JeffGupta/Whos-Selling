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
	var today;
	var expiry;
	
	$('#loginbutton').click(function()
	{
		today = new Date();
		expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
		
		var username = document.getElementById("usernamefield").value;
		var pass = document.getElementById("passwordfield").value;
		
		trylogin(username,pass);
	});
	
	function trylogin(username,pass)
	{
		var accountsnapshot;
		
		accountRef.child(username).once('value')
			.then(function(snapshot){
				accountsnapshot = snapshot.val();
				return (snapshot.val() !== null);
			})
			.then(function(exists){
				if(exists == false)
				{
					if(accountsnapshot.pass !== pass) {
						var loginalert = document.getElementById("loginalert");
						loginalert.innerHTML = "Username or password is incorrect";
						loginalert.style.border="solid rgba(255,0,0,0.2)";
						loginalert.style.backgroundColor="rgba(255,0,0,0.3)";
						loginalert.style.width="240px";
					}
				}
				else
				{
					storeusername(username);
				}
			})
			.catch(function(error){
				console.log("error");
			});
	}
	
	function storeusername(username)
	{
		setCookie("username", username);
		return true;
	}
	
	function setCookie(name, value)
	{
		document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
	}
});