
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
	var account_username;
	
	//putaccount();
	
	var AccountView = React.createClass({
		propTypes: {
			label: React.PropTypes.string,
		},
		
		getInitialState: function() {
			return {
				loggedIn: false
			}
		},
		
		//used just to add a little banner to the page
		getDefaultProps: function() {
			return {
				label: "Account Overview",
			}
		},
		
		render: function() {
			return (
				<div>
					<h2>{this.props.title}</h2>
					<div id="account_view">
						<AccountDisplay loggedIn={this.state.loggedIn} />
					</div>
				</div>
			);
		}
	});
	
	var AccountDisplay = React.createClass({
		propTypes: {
			username: React.PropTypes.string,
			firstname: React.PropTypes.string,
			lastname: React.PropTypes.string,
			birth: React.PropTypes.string,
			email: React.PropTypes.string,
			major: React.PropTypes.string
		},
		
		getDefaultProps: function() {
			username: ""
			firstname: ""
			lastname: ""
			birth: ""
			email: ""
			major: ""
		},
		
		render: function() {
			return (
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
			);
		},
		
		componentDidMount: function() {
			var $this = $(ReactDOM.findDOMNode(this));
			account_username = getCookie("username");
			this.putData();
		},
		
		putData: function() {
			//first grab the username from cookies
			
			console.log(account_username);
			var username = document.getElementById("username_label");
			var firstname = document.getElementById("firstname_label");
			var lastname = document.getElementById("lastname_label");
			var birth = document.getElementById("birth_label");
			var email = document.getElementById("email_label");
			var major = document.getElementById("major_label");
			
			const databaseURL = "https://whos-selling.firebaseio.com";
			var accountURL = databaseURL + "/accounts/" + account_username;
			var firstnameURL = accountURL + "/first_name.json";
			var lastnameURL = accountURL + "/last_name.json";
			var birthURL = accountURL + "/date_of_birth.json";
			var emailURL = accountURL + "/email.json";
			var majorURL = accountURL + "/major.json";
			
			xmlhttp.open("GET",firstnameURL,false);
			xmlhttp.send();
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
		}
	});
	
	ReactDOM.render(<AccountView />,document.getElementById('account_panel'));
