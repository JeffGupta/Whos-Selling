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
	//firebase.initializeApp(config);
	
	var accountRef = firebase.database().ref('accounts');
	var googleRef = firebase.database().ref('googles');
	var today;
	var expiry;
	
	$('#loginbutton').click(function()
	{
		//used for cookies
		today = new Date();
		expiry = new Date(today.getTime() + 30 * 60 * 1000); // plus 30 days
		
		var username = document.getElementById("usernamefield").value;
		var pass = document.getElementById("passwordfield").value;
		
		trylogin(username,pass);
	});
	
	function trylogin(username,pass)
	{
		var accountsnapshot;
		
		//promise to try to grab snapshot of object with username key
		accountRef.child(username).once('value')
			.then(function(snapshot){
				accountsnapshot = snapshot.val();
				return (snapshot.val() !== null);
			})
			.then(function(exists){
				//if user exists, check password is correct
				if(exists == true)
				{
					if(accountsnapshot.pass == pass) {
						storeusername(username);
						document.location.href = '../account.html';
					}
				}
				else
				{
					//if password is not correct alert user without telling them which one
					var loginalert = document.getElementById("loginalert");
					loginalert.innerHTML = "Username or password is incorrect";
					loginalert.style.border="solid rgba(255,0,0,0.2)";
					loginalert.style.backgroundColor="rgba(255,0,0,0.3)";
					loginalert.style.width="240px";
				}
			})
			.catch(function(error){
				console.log(error);
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
	
	function delete_cookie(name)
	{
	  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
	
	/*function addattempt(email,name)
	{
		var errormsg;
		
		//promise to get child with key that matches email
		googleRef.child(email).once('value')
			.then(function(snapshot){
				return (snapshot.val() !== null);
			})
			.then(function(exists){
				//if the email isn't taken, check email
				if(exists !== true)
				{
					var isgoogle = true;
					addaccount(isgoogle,name,email);
					return;
				}
				else {
					//storeemail(email); //email, is google account)
					document.location.href = '../account.html';
				}
			})
			.catch(function(error){
				console.log("error");
			});
	}
		
	function addaccount(isgoogle,name,email)
	{
		var account = {
			isgoogle: isgoogle,
			name: name,
			email: email
		}		
		$.post("/account", {data: account});
	}
	
	function emailToKey(emailAddress) {
		return emailAddress.replace(/[.]/g, '%20');
	}*/
});