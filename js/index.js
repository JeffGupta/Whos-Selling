// do dynamic validation for the gmu email address
$('#passwd').bind('input', function() {
		// Our pattern is mason id
		var regex = /.*.gmu.edu$/igm;
		//checks users results and seets a boolean 
		var result = regex.test($(this).val());
		//if not result , if not regex
		if (!result) {
			//if there is no user input do nothing
				if ($(this).val().length == 0) {
					//do not display any color
						$('#passwd').removeClass('green red');
						//no side messages
						$(this).next().stop(true, true).fadeIn(0).html('');
						//else
				} else {
					//display red and remove greeen if existing
						$('#passwd').addClass('red').removeClass('green');
						//run error check, state not gmu email show red
						$(this).next().stop(true, true).fadeIn(0).html('Not a GMU Email');
				}
				//else if
		} else {
			//display green , remove red if existing
				$('#passwd').addClass('green').removeClass('red');
				//return valid email address show green
				$(this).next().stop(true, true).fadeIn(0).html('Is a GMU Email');
		}});//exit