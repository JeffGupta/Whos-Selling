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
	
	var AccountView = React.createClass({
		propTypes: {
			label: React.PropTypes.string
		},
		
		getInitialState: function() {
			return {
				loggedIn: false
			}
		},
		
		//used just to add a little banner to the page
		getDefaults: function() {
			return {
				label: "Account Overview"
			}
		},
		
		render: function () {
			return {
				<div className="">
					<h2>{this.props.title}</h2>
					<div id="account_view">
						<AccountDisplay loggedIn={this.state.loggedIn}/>
					</div>
				</div>
			};
		}
	});
	
	var AccountDisplay = createClass({
		propTypes: {
			username: React.PropTypes.string,
			firstname: React.PropTypes.string,
			lastname: React.PropTypes.string,
			birth: React.PropTypes.string,
			email: React.PropTypes.string,
			major: React.PropTypes.string
		},
		
		getDefaults: function() {
			username: ""
			firstname: ""
			lastname: ""
			birth: ""
			email: ""
			major: ""
		},
		
		putData: function() {
			//first grab the username from cookies
			//var account_username = getCookie("username");
			
			var username = document.getElementById("username_label");
			var firstname = document.getElementById("firstname_label");
			var lastname = document.getElementById("lastname_label");
			var birth = document.getElementById("birth_label");
			var email = document.getElementById("email_label");
			var major = document.getElementById("major_label");
			
			const databaseURL = "https://whos-selling.firebaseio.com";
			var accountURL = databaseURL + "/accounts/" + "b";
			var firstnameURL = accountURL + "/first_name.json";
			var lastnameURL = accountURL + "/last_name.json";
			var birthURL = accountURL + "/date_of_birth.json";
			var emailURL = accountURL + "/email.json";
			var majorURL = accountURL + "/major.json";
			
			xhttp.open("GET",firstnameURL,false);
			xhttp.send();
			var data = xhttp.responseText;
			var first_data = JSON.parse(data);
			
			xhttp.open("GET",lastnameURL,false);
			xhttp.send();
			data = xhttp.responseText;
			var last_data = JSON.parse(data);
			
			xhttp.open("GET",birthURL,false);
			xhttp.send();
			data = xhttp.responseText;
			var birth_data = JSON.parse(data);
			
			xhttp.open("GET",emailURL,false);
			xhttp.send();
			data = xhttp.responseText;
			var email_data = JSON.parse(data);
			
			xhttp.open("GET",majorURL,false);
			xhttp.send();
			data = xhttp.responseText;
			var major_data = JSON.parse(data);
			
			username.appendChild(document.createTextNode("Username: " + username_data));
			firstname.appendChild(document.createTextNode("First Name: " + first_data));
			lastname.appendChild(document.createTextNode("Last Name: " + last_data));
			birth.appendChild(document.createTextNode("Date of Birth: " + birth_data));
			email.appendChild(document.createTextNode("Email: " + email_data));
			major.appendChild(document.createTextNode("Major: " + major_data));
		},
		
		render: function() {
			return {
				<div>
					<u1>
						<li id="username_label">{this.props.username}</li>
						<li id="firstname_label">{this.props.firstname}</li>
						<li id="lastname_label">{this.props.lastname}</li>
						<li id="birth_label">{this.props.birth}</li>
						<li id="email_label">{this.props.email}</li>
						<li id="major_label">{this.props.major}</li>
					</u1>
				</div>
			};
		}
	});
	
	ReactDOM.redner(<AccountView />,document.getElementById('account_panel'));
	
	/* OLD CODE WITH JQUERY
	//once page loads, display account information
	function putaccount()
	{
		//promise to get snapshot with username key
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
				
				//display account info
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
	} */
});