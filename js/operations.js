
$(document).ready(function() {
$('#loginbutton').click(function()
{
	if((document.getElementById("usernamefield").value!="Username")||(document.getElementById("passwordfield").value!="Password")) {
		var notifications = document.getElementById("loginnotifications");
		notifications.innerHTML="Incorrect login or password entered";
		//notifications.style.color="red";
		notifications.style.border="solid rgba(255,0,0,0.2)";
		notifications.style.backgroundColor="rgba(255,0,0,0.3)";
	}
	
});
});