var counter = 0;
var fadeoutCounter = 0;
var tableCounter = 0;
var pageCounter = 0;
var files = [];

var pageOne = [null, null, null, null, null, null, null, null, null];
var pageTwo = [null, null, null, null, null, null, null, null, null];
var seatValues = [];

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

	} else {

		pageCounter = 1;

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

		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br> <select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <input class = "text_fields" type="text" name="cuisine" placeholder="..."><label class = "label" for="input[name=sub_cuisine]">Sub-Cuisine</label> <br> <input class = "text_fields" type="text" name="sub_cuisine" placeholder="..."><label class = "label" for="input[name=menu]">Menu</label> <br> <input class = "text_fields" type="text" name="menu" placeholder="..."><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><input class = "text_fields" type="text" name="price_range" placeholder="..."></div><div class = "availability_information" align="left"><label class = "label" for="input[name=location]">Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..."><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="open_hour" placeholder="..."><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="close_hour" placeholder="..."></div><div class = "technical_information" align="left"><label class = "label" for="input[name=family]">Sections</label> <br> <input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> <label class = "label" for="input[name=seat_max]">Reservation Seat Count Max.</label> <br> <input class = "seat_field" type="text" name="seat_max" placeholder="..."></div><div class = "images"></div></div><div class = "buttons" style="display: flex;"><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';

		$(".card").prepend(continue_page);

		setPriceRangeListener();

		$(".main_body").css("height", "1300px");
		$(".card").css("width", "1050px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-525px");
		$(".card").css("max-width", "1050px");
		$(".card").css("min-width", "1050px");

		$("input[name=cuisine]").prop("disabled", true);
		$("input[name=price_range]").prop("disabled", true);
		$("input[name=open_hour]").prop("disabled", true);
		$("input[name=close_hour]").prop("disabled", true);

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$(".text_fields").removeAttr("keypress");
		$(".seat_max").removeAttr("keypress");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").attr("onclick", "processRegistration()")

		$(".text_fields").keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		$(".seat_field").keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		if(pageTwo[0] != null){

			$("input[name=cuisine]").val(pageTwo[0]);
			$("input[name=sub_cuisine]").val(pageTwo[1]);
			$("input[name=menu]").val(pageTwo[2]);

			$("input[name=price_range]").val(pageTwo[3]);

			if(pageTwo[3] == "cheap"){

				$(".price_range_list #1").css("color", "#EB2748");

			}else if(pageTwo[3] == "semi-moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");

			}else if(pageTwo[3] == "moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");

			}else if(pageTwo[3] == "semi-expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");

			}else if(pageTwo[3] == "expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");
				$(".price_range_list #5").css("color", "#EB2748");

			}else{

				// DO NOTHING

			}

			$("input[name=location]").val(pageTwo[4]);
			$("input[name=open_hour]").val(pageTwo[5]);
			$("input[name=close_hour]").val(pageTwo[6]);

			if(pageTwo[7] == "family"){

				$("input:checkbox[name=family]").prop("checked", true);

			}else if(pageTwo[7] == "single"){

				$("input:checkbox[name=single]").prop("checked", true);

			}else if(pageTwo[7] == "single + family"){

				$("input:checkbox[name=single]").prop("checked", true);
				$("input:checkbox[name=family]").prop("checked", true);

			}else{
				// DO NOTHING
			}

			$("input[name=seat_max]").val(pageTwo[8]);

		}

	}
}

// PROCESS PAGE TWO
function processRegistration(){
	if(String($("input[name=cuisine]").val()) == "" ||
		String($("input[name=sub_cuisine]").val()) == "" ||
		String($("input[name=menu]").val()) == "" ||
		String($("input[name=price_range]").val()) == "" ||
		String($("input[name=location]").val()) == "" ||
		String($("input[name=open_hour]").val()) == "" ||
		String($("input[name=close_hour]").val()) == "" ||
		(!$("input:checkbox[name=family]").is(":checked") && !$("input:checkbox[name=single]").is(":checked")) ||
		String($("input[name=seat_max]").val()) == ""){

		$(".text_fields").css("animation-name", "shake");
        $(".text_fields").css("animation-duration", "0.5s, 0.35s");
        $(".text_fields").css("animation-iteration", "1, 2");

        $(".seat_field").css("animation-name", "shake");
        $(".seat_field").css("animation-duration", "0.5s, 0.35s");
        $(".seat_field").css("animation-iteration", "1, 2");

        // Reset CSS to enable recursive animation
        setTimeout(function() {
          $(".text_fields").css("animation", "none");
          $(".seat_field").css("animation", "none");
        }, 500);

	}else{

		pageCounter = 2;


		pageTwo[0] = String($("input[name=cuisine]").val());
		pageTwo[1] = String($("input[name=sub_cuisine]").val());
		pageTwo[2] = String($("input[name=menu]").val());
		pageTwo[3] = String($("input[name=price_range]").val());
		pageTwo[4] = String($("input[name=location]").val());
		pageTwo[5] = String($("input[name=open_hour]").val());
		pageTwo[6] = String($("input[name=close_hour]").val());

		if($("input:checkbox[name=family]").is(":checked") && $("input:checkbox[name=single]").is(":checked")){

			pageTwo[7] = "single + family";

		}else if ($("input:checkbox[name=family]").is(":checked") && !$("input:checkbox[name=single]").is(":checked")){

			pageTwo[7] = "family";

		}else if($("input:checkbox[name=single]").is(":checked") && !$("input:checkbox[name=family]").is(":checked")){

			pageTwo[7] = "single";

		}else{

			pageTwo[7] = "";	

		}
	
		pageTwo[8] = String($("input[name=seat_max]").val());


		$(".card_fields").remove();

		var tablePage = '<div class ="card_fields" style="display: inline-block;"><label class ="label" onclick="addColumnAndRow()">Add a Table (+)</label><br><br><div class = "tables" align="left"><table class="tg"><tr class = "columns"></tr><tr class = "rows"></tr></table></div><div class = "images" align="center" style="display: inline-block;"><label class ="label" for="local_explorer"> Upload Images </label><br><br><input class ="local_explorer" id="my-input" type="file" name="local_explorer" multiple="multiple" onchange="readFiles()"></div></div>';
		$(".card").prepend(tablePage);

		$(".main_body").css("height", "auto");
		$(".card").css("width", "750px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-375px");
		$(".card").css("max-width", "750px");
		$(".card").css("min-width", "750px");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").click(function(){
			
			if(files.length == 0){

				alert("Please provide images");

			}else if(seatValues.length == 0){

				alert("Please provide tables");

			}else{

				// DO FIREBASE
				alert("All Set!");
			}

		});

		// RE-ASSIGN TABLE VALUES
		for(i = 0; i < tableCounter; i++){
			$(".columns").append("<th> T"+(i+1)+"</th>");
			$(".rows").append("<td>"+seatValues[i]+"</td>")
		}

	}
}


function goBack(){

// GO BACK FROM PAGE ONE
	if(pageCounter == 1){

		pageTwo[0] = String($("input[name=cuisine]").val());
		pageTwo[1] = String($("input[name=sub_cuisine]").val());
		pageTwo[2] = String($("input[name=menu]").val());
		pageTwo[3] = String($("input[name=price_range]").val());
		pageTwo[4] = String($("input[name=location]").val());
		pageTwo[5] = String($("input[name=open_hour]").val());
		pageTwo[6] = String($("input[name=close_hour]").val());

		if($("input:checkbox[name=family]").is(":checked") && $("input:checkbox[name=single]").is(":checked")){

			pageTwo[7] = "single + family";

		}else if ($("input:checkbox[name=family]").is(":checked") && !$("input:checkbox[name=single]").is(":checked")){

			pageTwo[7] = "family";

		}else if($("input:checkbox[name=single]").is(":checked") && !$("input:checkbox[name=family]").is(":checked")){

			pageTwo[7] = "single";

		}else{

			pageTwo[7] = "";	

		}
	
		pageTwo[8] = String($("input[name=seat_max]").val());

		$(".card_fields").remove();
		$(".buttons").remove();

		var home_page = '<div class ="card_fields" style="display: flex;"><div class = "personal_info" align="left"><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="text" name="phone_number" placeholder="..."><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."></div><div class = "restaurant_info" align="left"><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."><label class = "label" for="input[name=restaurant_province]">Restaurant Province</label> <br> <input class = "text_fields" type="text" name="restaurant_province" placeholder="..."><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="text" name="restaurant_zip" placeholder="..."></div></div><div class ="submission"><center><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></center></div></div></div>';
		$(".card").append(home_page);

		$(".main_body").css("height", "1500px");
		$(".card").css("width", "750px");
		$(".card").css("margin-left", "-375px");
		$(".card").css("left", "50%");
		$(".card").css("max-width", "750px");
		$(".card").css("min-width", "750px");

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

		pageCounter = 0;

// GO BACK FROM PAGE TWO
	}else{

		files = [];

		pageCounter = 1;

		$(".card_fields").remove();
		$(".buttons").remove();

		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br><select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <input class = "text_fields" type="text" name="cuisine" placeholder="..."><label class = "label" for="input[name=sub_cuisine]">Sub-Cuisine</label> <br> <input class = "text_fields" type="text" name="sub_cuisine" placeholder="..."><label class = "label" for="input[name=menu]">Menu</label> <br> <input class = "text_fields" type="text" name="menu" placeholder="..."><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><input class = "text_fields" type="text" name="price_range" placeholder="..."></div><div class = "availability_information" align="left"><label class = "label" for="input[name=location]">Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..."><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="open_hour" placeholder="..."><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="close_hour" placeholder="..."></div><div class = "technical_information" align="left"><label class = "label" for="input[name=family]">Sections</label> <br> <input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> <label class = "label" for="input[name=seat_max]">Reservation Seat Count Max.</label> <br> <input class = "seat_field" type="text" name="seat_max" placeholder="..."></div><div class = "images"></div></div><div class = "buttons" style="display: flex;"><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';

		$(".card").prepend(continue_page);

		setPriceRangeListener();

		$(".main_body").css("height", "1300px");
		$(".card").css("width", "1050px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-525px");
		$(".card").css("max-width", "1050px");
		$(".card").css("min-width", "1050px");

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$(".text_fields").removeAttr("keypress");
		$(".seat_max").removeAttr("keypress");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").attr("onclick", "processRegistration()")

		$(".text_fields").keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		$(".seat_field").keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		if(pageTwo[0] != null){

			$("input[name=cuisine]").val(pageTwo[0]);
			$("input[name=sub_cuisine]").val(pageTwo[1]);
			$("input[name=menu]").val(pageTwo[2]);

			$("input[name=price_range]").val(pageTwo[3]);

			if(pageTwo[3] == "cheap"){

				$(".price_range_list #1").css("color", "#EB2748");

			}else if(pageTwo[3] == "semi-moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");

			}else if(pageTwo[3] == "moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");

			}else if(pageTwo[3] == "semi-expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");

			}else if(pageTwo[3] == "expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");
				$(".price_range_list #5").css("color", "#EB2748");

			}else{

				// DO NOTHING

			}

			$("input[name=location]").val(pageTwo[4]);
			$("input[name=open_hour]").val(pageTwo[5]);
			$("input[name=close_hour]").val(pageTwo[6]);

			if(pageTwo[7] == "family"){

				$("input:checkbox[name=family]").prop("checked", true);

			}else if(pageTwo[7] == "single"){

				$("input:checkbox[name=single]").prop("checked", true);

			}else if(pageTwo[7] == "single + family"){

				$("input:checkbox[name=single]").prop("checked", true);
				$("input:checkbox[name=family]").prop("checked", true);

			}else{

				// DO NOTHING

			}

			$("input[name=seat_max]").val(pageTwo[8]);

		}


	}

}

// OPEN HOUR LISTENER
function setTextOpen(){
	var minute = null;

	if($(".open_minute_select").find(":selected").text() == 5){
		minute = "05";
	}else if($(".open_minute_select").find(":selected").text() == 0){
		minute = "00";
	}else{
		minute = $(".open_minute_select").find(":selected").text();
	}

	$("input[name=open_hour]").val($('.open_hour_select').find(":selected").text() + ":" + minute + " " + $('.open_am_pm').find(":selected").text());
}

// CLOSE HOUR LISTENER
function setTextClose(){
	var minute = null;

	if($(".close_minute_select").find(":selected").text() == 5){
		minute = "05";
	}else if($(".close_minute_select").find(":selected").text() == 0){
		minute = "00";
	}else{
		minute = $(".close_minute_select").find(":selected").text();
	}

	$("input[name=close_hour]").val($('.close_hour_select').find(":selected").text() + ":" + minute + " " + $('.close_am_pm').find(":selected").text());
}

// PRICE RANGE (DOLLAR) LISTENER
function setPriceRangeListener(){

	$(".price_range_list li").click(function() {
		if($(this).attr('id') == 1){
			$("input[name=price_range]").val("cheap");

			$(this).css("color", "#EB2748");
			$("#2").css("color", "grey");
			$("#3").css("color", "grey");
			$("#4").css("color", "grey");
			$("#5").css("color", "grey");

		}else if($(this).attr('id') == 2){
			$("input[name=price_range]").val("semi-moderate");

			$("#1").css("color", "#EB2748");
			$("#2").css("color", "#EB2748");
			$("#3").css("color", "grey");
			$("#4").css("color", "grey");
			$("#5").css("color", "grey");

		}else if($(this).attr('id')== 3){
			$("input[name=price_range]").val("moderate");

			$("#1").css("color", "#EB2748");
			$("#2").css("color", "#EB2748");
			$("#3").css("color", "#EB2748");
			$("#4").css("color", "grey");
			$("#5").css("color", "grey");

		}else if($(this).attr('id') == 4){
			$("input[name=price_range]").val("semi-expensive");

			$("#1").css("color", "#EB2748");
			$("#2").css("color", "#EB2748");
			$("#3").css("color", "#EB2748");
			$("#4").css("color", "#EB2748");
			$("#5").css("color", "grey");

		}else{
			$("input[name=price_range]").val("expensive");

			$("#1").css("color", "#EB2748");
			$("#2").css("color", "#EB2748");
			$("#3").css("color", "#EB2748");
			$("#4").css("color", "#EB2748");
			$("#5").css("color", "#EB2748");
		}
});
}

// ADD TABLE COLUMNS AND ROWS
function addColumnAndRow(){

	if(tableCounter > 24){

		alert("Maximum Capacity Reached.");

	}else{

	// -------------------------------------------------------------------------------------

		let seatNumber = prompt("Number of seats for this table?");

	// -------------------------------------------------------------------------------------	

		if(seatNumber == null){

			// DO NOTHING

		}else if(seatNumber > parseInt(pageTwo[8]) || seatNumber <= 0){

			alert("Please provide a valid seat value");

		}else{
			tableCounter++;	

			$(".columns").append("<th> T" + tableCounter + " </th>");
			$(".rows").append("<td>" + seatNumber + "</td>");

			seatValues.push(seatNumber);

		}
	}

}

// READ LOCAL FILES
function readFiles(){
	files = document.getElementById("my-input").files;

	for (var i = 0; i < files.length; i++){

 		alert(files[i].name);

	}
}

// SET CUISINE TEXT
function setTextCuisine(){
	$("input[name=cuisine]").val($(".cuisine_select").find(":selected").text());
}