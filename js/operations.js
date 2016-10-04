$(document).ready(function() {
/* $('#loginbutton').click(function()
{
	//placeholder: check if username and password are what are desired. will change once database is implemeented
	if((document.getElementById("usernamefield").value!="Username")||(document.getElementById("passwordfield").value!="Password")) {
		var notifications = document.getElementById("loginnotifications");
		notifications.innerHTML="Incorrect login or password entered";
		notifications.style.border="solid rgba(255,0,0,0.2)";
		notifications.style.backgroundColor="rgba(255,0,0,0.3)";
	}
	
}); */

//place holder to allow user to edit items before listing them
$('#anotheritem').click(function()
{
	
});

/* $('#listsubmit').click(function()
{
	var itemname = document.getElementById("itemname").value;
	var condition = document.getElementById("condition").value;
	var description = document.getElementById("description").value;
	
	//present user's item listing. placeholder for now, will implement verify listing functionality
	var verifylist = document.getElementById("verifylist");
	verifylist.innerHTML = "<u1><li>Item name: "+itemname+"</li><br /><li>Condition: "+condition+"</li><br /><li>Description: "+description+"</li></ul><br /><input type=\"button\" class=\"registersubmit\" name=\"edititem\" id=\"edititem\" value=\"Edit items\">";
	
	//remove the entire listinput div
	var preview = document.getElementById("preview");
	preview.parentNode.removeChild(preview);
}); */

});