describe("AccountDisplay", function(){
	var AccountDisplay; 
	var username = document.getElementById("username_label"); 
	var firstname = document.getElementById("firstname_label");
	var lastname = document.getElementById("lastname_label");
	var birth = document.getElementById("birth_label");
	var email = document.getElementById("email_label");
	var major = document.getElementById("major_label");
	
	beforeEach(function(){
		//ListView = new ListView(); 
		username = document.getElementById("username_label"); 
		firstname = document.getElementById("firstname_label");
		lastname = document.getElementById("lastname_label");
		birth = document.getElementById("birth_label");
		email = document.getElementById("email_label");
		major = document.getElementById("major_label");
		
	});
	//before new list is added check to see the list should be empty
	it("Testing to see if the account display variables are properly init.", function(){
		expect(username).not.toBeTruthy();
		expect(firstname).not.toBeTruthy();
		expect(lastname).not.toBeTruthy();
		expect(birth).not.toBeTruthy();
		expect(email).not.toBeTruthy();
		expect(major).not.toBeTruthy();
		//expect(username.document.createTextNode("Username: " + username)).not.toEqual(); 
	}); 
	

});