var counter = 0;
var fadeoutCounter = 0;

var pageOne = [null, null, null, null, null, null, null, null, null];
var pageTwo = [null, null, null, null, null, null, null, null, null, null];

// 2, 3, 5, 6, 7, 8, 9 --> PageTwo Elements NEED TO BE CHANGED (HTML)

function animateEntry(){
	$(".main_image").width($(window).width());
	var timer = setInterval(function(){
		if(counter == 1){
			$(".entry_message").css("-webkit-animation", "fadeout 2s");
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
	var home_page = '<div class="container"><div class ="page_header"><div class ="page_message"><center><p class ="title"> Restaurant Registration Form </p></center><center><p class ="description"> Please fill out the following form and we\'ll contact you through email or phone once your submission has been reviewed. <br><br>For any inquiries, contact us at BooKT19.15@gmail.com</p></center></div></div><div class="card"><div class ="card_fields" style="display: flex;"><div class = "personal_info" align="left"><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="text" name="phone_number" placeholder="..."><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."></div><div class = "restaurant_info" align="left"><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."><label class = "label" for="input[name=restaurant_province]">Restaurant Province</label> <br> <input class = "text_fields" type="text" name="restaurant_province" placeholder="..."><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="text" name="restaurant_zip" placeholder="..."></div></div><div class ="submission"><center><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></center></div></div></div>';
	$(".main_body").append(home_page);
	$(".main_body").css("height", "1500px");
	$(".image").width($(window).width());
	$(".text_fields").keypress(function(e){
		if(e.which == 13){
			storeAndProceed()
		}
	});

}

function storeAndProceed(){
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

		pageOne[0] = String($("input[name=first_name]").val());
		pageOne[1] = String($("input[name=last_name]").val());
		pageOne[2] = String($("input[name=phone_number]").val());
		pageOne[3] = String($("input[name=email_address]").val());
		pageOne[4] = String($("input[name=restaurant_name]").val());
		pageOne[5] = String($("input[name=restaurant_country]").val());
		pageOne[6] = String($("input[name=restaurant_city]").val());
		pageOne[7] = String($("input[name=restaurant_province]").val());
		pageOne[8] = String($("input[name=restaurant_zip]").val());

		$(".card_fields").remove();
		$(".submission").remove();

		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br> <input class = "text_fields" type="text" name="cuisine" placeholder="..."><label class = "label" for="input[name=sub_cuisine]">Sub-Cuisine</label> <br> <input class = "text_fields" type="text" name="sub_cuisine" placeholder="..."><label class = "label" for="input[name=menu]">Menu</label> <br> <input class = "text_fields" type="text" name="menu" placeholder="..."><label class = "label" for="input[name=price_range]">Price Range</label> <br> <input class = "text_fields" type="text" name="price_range" placeholder="..."></div><div class = "availability_information" align="left"><label class = "label" for="input[name=location]">Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..."><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <input class = "text_fields" type="text" name="open_hour" placeholder="..."><label class = "label" for="input[name=close_hour]">Close Hour</label> <br> <input class = "text_fields" type="text" name="close_hour" placeholder="..."></div><div class = "technical_information" align="left"><label class = "label" for="input[name=sections]">Sections</label> <br> <input class = "text_fields" type="text" name="sections" placeholder="..."><label class = "label" for="input[name=num_tables]">Number of Tables</label> <br> <input class = "text_fields" type="text" name="num_tables" placeholder="..."><label class = "label" for="input[name=num_seats]">Number of Seats</label> <br> <input class = "text_fields" type="text" name="num_seats" placeholder="..."></div><div class = "images"></div></div><div class = "buttons" style="display: flex;"><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';

		$(".card").prepend(continue_page);

		$(".main_body").css("height", "1500px");
		$(".card").css("width", "1050px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-525px");
		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$(".text_fields").removeAttr("keypress");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").attr("onclick", "processRegistration()")

		$(".text_fields").keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		if(pageTwo[0] != null){

			$("input[name=cuisine]").val(pageTwo[0]);
			$("input[name=sub_cuisine]").val(pageTwo[1]);
			$("input[name=menu]").val(pageTwo[2]);
			$("input[name=price_range]").val(pageTwo[3]);
			$("input[name=location]").val(pageTwo[4]);
			$("input[name=open_hour]").val(pageTwo[5]);
			$("input[name=close_hour]").val(pageTwo[6]);
			$("input[name=sections]").val(pageTwo[7]);
			$("input[name=num_tables]").val(pageTwo[8]);
			$("input[name=num_seats]").val(pageTwo[9]);

		}

	}
}


function processRegistration(){
	if(String($("input[name=cuisine]").val()) == "" ||
		String($("input[name=sub_cuisine]").val()) == "" ||
		String($("input[name=menu]").val()) == "" ||
		String($("input[name=price_range]").val()) == "" ||
		String($("input[name=location]").val()) == "" ||
		String($("input[name=open_hour]").val()) == "" ||
		String($("input[name=close_hour]").val()) == "" ||
		String($("input[name=sections]").val()) == "" ||
		String($("input[name=num_tables]").val()) == "" ||
		String($("input[name=num_seats]").val()) == ""){

		$(".text_fields").css("animation-name", "shake");
        $(".text_fields").css("animation-duration", "0.5s, 0.35s");
        $(".text_fields").css("animation-iteration", "1, 2");
        // Reset CSS to enable recursive animation
        setTimeout(function() {
          $(".text_fields").css("animation", "none");
        }, 500);

	}else{

		// DO SOMETHING

	}
}


function goBack(){

	pageTwo[0] = String($("input[name=cuisine]").val());
	pageTwo[1] = String($("input[name=sub_cuisine]").val());
	pageTwo[2] = String($("input[name=menu]").val());
	pageTwo[3] = String($("input[name=price_range]").val());
	pageTwo[4] = String($("input[name=location]").val());
	pageTwo[5] = String($("input[name=open_hour]").val());
	pageTwo[6] = String($("input[name=close_hour]").val());
	pageTwo[7] = String($("input[name=sections]").val());
	pageTwo[8] = String($("input[name=num_tables]").val());
	pageTwo[9] = String($("input[name=num_seats]").val());

	$(".card_fields").remove();
	$(".buttons").remove();

	var home_page = '<div class ="card_fields" style="display: flex;"><div class = "personal_info" align="left"><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="text" name="phone_number" placeholder="..."><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."></div><div class = "restaurant_info" align="left"><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."><label class = "label" for="input[name=restaurant_province]">Restaurant Province</label> <br> <input class = "text_fields" type="text" name="restaurant_province" placeholder="..."><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="text" name="restaurant_zip" placeholder="..."></div></div><div class ="submission"><center><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></center></div></div></div>';
	$(".card").append(home_page);

	$(".card").css("width", "750px");
	$(".card").css("margin-left", "-375px");
	$(".card").css("left", "50%");

	$("input[name=first_name]").val(pageOne[0]);
	$("input[name=last_name]").val(pageOne[1]);
	$("input[name=phone_number]").val(pageOne[2]);
	$("input[name=email_address]").val(pageOne[3]);
	$("input[name=restaurant_name]").val(pageOne[4]);
	$("input[name=restaurant_country]").val(pageOne[5]);
	$("input[name=restaurant_city]").val(pageOne[6]);
	$("input[name=restaurant_province]").val(pageOne[7]);
	$("input[name=restaurant_zip]").val(pageOne[8]);

	$(".text_fields").keypress(function(e){
			if(e.which == 13){
				storeAndProceed();
			}
		});

}