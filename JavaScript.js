var counter = 0;
var fadeoutCounter = 0;

var mainPage = "";

function animateEntry(){
	var timer = setInterval(function(){
		if(counter == 2){
			$(".main_body").css("-webkit-animation", "fadeout 2s");
			var fadeoutTimer = setInterval(function(){
				fadeoutCounter++;
				if(fadeoutCounter == 2){
					$(".entry_animation").remove();
					clearInterval(fadeoutTimer);
					clearInterval(timer);
					buildPage();
				}
			}, 1000);
		}
		counter++;
	}, 1000);
}


function buildPage(){
	var large = '<div class="container"><div class ="page_header"><div class="image_wrapper"><img class="image" src="https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg" alt=""></div><div class ="page_message"><center><p class ="title"> Restaurant Registration Form </p></center><center><p class ="description"> Please fill out the following form and we\'ll contact you through email or phone once your submission has been reviewed. <br><br>For any inquiries, contact us at BooKT19.15@gmail.com</p></center></div></div><div class="card"><div class ="card_fields" float="left"><input class = "text_fields" type="text" name="first_name" placeholder="First Name"><input class = "text_fields" type="text" name="last_name" placeholder="Last Name"><input class = "text_fields" type="text" name="phone_number" placeholder="Mobile Number"><input class = "text_fields" type="text" name="email_address" placeholder="Email Address"><input class = "text_fields" type="text" name="restaurant_name" placeholder="Restaurant Name"><input class = "text_fields" type="text" name="restaurant_country" placeholder="Restaurant Country"><input class = "text_fields" type="text" name="restaurant_city" placeholder="Restaurant city"><input class = "text_fields" type="text" name="restaurant_province" placeholder="Restaurant Province"><input class = "text_fields" type="text" name="restaurant_zip" placeholder="Restaurant Zip Code"></div><div class ="submission"><center><button class ="submitButton" onclick="processRegistration()"> Register </button></center></div></div></div>';
	$(".main_body").append(large);
	$(".text_fields").keypress(function(e){
		if(e.which == 13){
			processRegistration()
		}
	});

}

function processRegistration(){
	if(String($("input[name=first_name]").val()) == "" || 
		String($("input[name=last_name]").val()) == "" ||
		String($("input[name=phone_number]").val()) == "" ||
		String($("input[name=email_address]").val()) == "" || 
		String($("input[name=restaurant_name]").val()) == "" ||
		String($("input[name=restaurant_country]").val()) == "" ||
		String($("input[name=restaurant_city]").val()) == "" ||
		String($("input[name=restaurant_province]").val()) == "" ||
		String($("input[name=restaurant_zip]").val()) == ""){

		 $(".text_fields").css("animation-name", "shake");
        $(".text_fields").css("animation-duration", "0.5s, 0.35s");
        $(".text_fields").css("animation-iteration", "1, 2");
        // Reset CSS to enable recursive animation
        setTimeout(function() {
          $(".text_fields").css("animation", "none");
        }, 500);

	} else{

		console.log("ALL SET");

	}
}