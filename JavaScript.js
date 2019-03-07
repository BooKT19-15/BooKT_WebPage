var counter = 0;
var fadeoutCounter = 0;
var tableCounterSingle = 0;
var tableCounterFamily = 0;
var pageCounter = 0;
var files = [];
var menuCategoryCounter = 0;
var c1 = 0;
var c2 = 0;

var pageOne = [null, null, null, null, null, null, null, null, null, null];
var pageTwo = [null, null, null, null, null, null];
var seatValuesSingle = [];
var seatValuesFamily = [];
var categoryMenu = [];


class MenuCategory {
  constructor(menuCategory, menuItems) {
    this.menuCategory = menuCategory;
    this.menuItems = menuItems;
  }
}

class MenuItem {
	constructor(name, price, description){
		this.name = name;
		this.price = price;
		this.description = description;
	}
}

// ANIMATE BOOKT ENTRY
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

// BUILD INTRO PAGE (PORTAL)
function buildPage(){
	var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" onclick="signupPage()"> Signup </button></div></div>';
	$(".main_body").append(portal_page);
	$(".main_body").css("height", "auto");
	$(".image").width($(window).width());

}

// BUILD LOGIN PAGE
function loginPage(){

	$(".container").remove();

	var login_page = '<div class="container"><div class="dummyDiv"><div class ="emailDiv"><input class = "login_fields" type="text" name="email_address" placeholder="Email Address"></div><div class="passwordDiv"><input class = "login_fields" type="password" name="password" placeholder="Password"></div><div class ="submission"><button class ="accountLoginButton" onclick="accountLogin()"> Login </button><button class ="backButton" onclick="goBack()"> Back </button></div></div>';
	$(".main_body").append(login_page);
	$(".main_body").css("height", "auto");
	$(".image").width($(window).width());

	$(".login_fields").unbind().keypress(function(e){
		if(e.which == 13){
			accountLogin();
		}
	});

}

// BUILD SIGNUP PAGE
function signupPage(){
	$(".container").css("-webkit-animation", "fadeout 2s");
	var home_page = '<div class="container"><div class ="page_header"><div class ="page_message"><center><p class ="title"> Restaurant Registration Form </p></center><center><p class ="description"> Please fill out the following form and we\'ll contact you through email or phone once your submission has been reviewed. <br><br>For any inquiries, contact us at BooKT19.15@gmail.com</p></center></div></div><div class="card"><div class ="card_fields" style="display: flex;"><div class = "personal_info" align="left"><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="number" name="phone_number" placeholder="..."><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."><label class = "label" for="input[name=password]">Password</label> <br> <input class = "text_fields" type="password" name="password" placeholder="..."></div><div class = "restaurant_info" align="left"><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="text" name="restaurant_zip" placeholder="..."><label class = "label" for="input[name=location]">Restaurant Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..."></div></div><div class ="submission" class = "buttons" style="display: flex;"><button class ="backButton" onclick="goBack()"> Back </button><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></div></div></div>';
	$(".main_body").append(home_page);
	$(".main_body").css("height", "1500px");
	$(".image").width($(window).width());

	$(".submitButton").css("position", "absolute");
	$(".submitButton").css("right", "50px");

	$(".text_fields").unbind().keypress(function(e){
		if(e.which == 13){
			storeAndProceed()
		}
	});	
}

// PROCESS PAGE ONE AND GO TO PAGE TWO
function storeAndProceed(){
	if(String($("input[name=first_name]").val()) == "" || 
		String($("input[name=last_name]").val()) == "" ||
		String($("input[name=phone_number]").val()) == "" ||
		String($("input[name=email_address]").val()) == "" || 
		String($("input[name=password]").val()) == "" ||
		String($("input[name=restaurant_name]").val()) == "" ||
		String($("input[name=restaurant_country]").val()) == "" ||
		String($("input[name=restaurant_city]").val()) == "" ||
		String($("input[name=restaurant_zip]").val()) == "" ||
		String($("input[name=location]").val()) == ""){

		$(".text_fields").css("animation-name", "shake");
        $(".text_fields").css("animation-duration", "0.5s, 0.35s");
        $(".text_fields").css("animation-iteration", "1, 2");
        // Reset CSS to enable recursive animation
        setTimeout(function() {
          $(".text_fields").css("animation", "none");
        }, 500);

	} else {

		pageCounter = 2;

		pageOne[0] = String($("input[name=first_name]").val());
		pageOne[1] = String($("input[name=last_name]").val());
		pageOne[2] = String($("input[name=phone_number]").val());
		pageOne[3] = String($("input[name=email_address]").val());
		pageOne[4] = String($("input[name=password]").val());
		pageOne[5] = String($("input[name=restaurant_name]").val());
		pageOne[6] = String($("input[name=restaurant_country]").val());
		pageOne[7] = String($("input[name=restaurant_city]").val());
		pageOne[8] = String($("input[name=restaurant_zip]").val());
		pageOne[9] = String($("input[name=location]").val());

		$(".card_fields").remove();
		$(".submission").remove();

		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br> <select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <input class = "text_fields" type="text" name="cuisine" placeholder="..."><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><input class = "text_fields" type="text" name="price_range" placeholder="..."><label class = "label" for="input[name=restaurant_phone_number]">Restaurant Phone Number</label> <br> <input class = "text_fields" type="number" name="restaurant_phone_number" placeholder="..."></div><div class = "availability_information" align="left"><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="open_hour" placeholder="..."><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="close_hour" placeholder="..."><label class = "label" for="input[name=family]">Sections</label> <br> <input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> </div><div class = "images"></div></div><div class = "buttons" style="display: flex;"><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';

		$(".card").prepend(continue_page);

		setPriceRangeListener();

		$(".main_body").css("height", "1100px");
		$(".card").css("width", "750px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-375px");
		$(".card").css("max-width", "750px");
		$(".card").css("min-width", "750px");

		$("input[name=cuisine]").prop("disabled", true);
		$("input[name=price_range]").prop("disabled", true);
		$("input[name=open_hour]").prop("disabled", true);
		$("input[name=close_hour]").prop("disabled", true);

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").attr("onclick", "processRegistration()")

		$(".text_fields").unbind().keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		$(".seat_field").unbind().keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		if(pageTwo[0] != null){

			$("input[name=cuisine]").val(pageTwo[0]);
			$("input[name=price_range]").val(pageTwo[1]);
			$("input[name=restaurant_phone_number]").val(pageTwo[2]);

			$("input[name=open_hour]").val(pageTwo[3]);
			$("input[name=close_hour]").val(pageTwo[4]);

			if(pageTwo[1] == "cheap"){

				$(".price_range_list #1").css("color", "#EB2748");

			}else if(pageTwo[1] == "semi-moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");

			}else if(pageTwo[1] == "moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");

			}else if(pageTwo[1] == "semi-expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");

			}else if(pageTwo[1] == "expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");
				$(".price_range_list #5").css("color", "#EB2748");

			}else{

				// DO NOTHING

				$("input[name=sections]").val(pageTwo[5]);

			}

			if(pageTwo[5] == "Family"){

				$("input:checkbox[name=family]").prop("checked", true);

			}else if(pageTwo[5] == "Single"){

				$("input:checkbox[name=single]").prop("checked", true);

			}else if(pageTwo[5] == "Single + Family"){

				$("input:checkbox[name=single]").prop("checked", true);
				$("input:checkbox[name=family]").prop("checked", true);

			}else{
				// DO NOTHING
			}

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

		pageCounter = 3;


		pageTwo[0] = String($("input[name=cuisine]").val());
		pageTwo[1] = String($("input[name=price_range]").val());
		pageTwo[2] = String($("input[name=restaurant_phone_number]").val());
		pageTwo[3] = String($("input[name=open_hour]").val());
		pageTwo[4] = String($("input[name=close_hour]").val());

		if($("input:checkbox[name=family]").is(":checked") && $("input:checkbox[name=single]").is(":checked")){

			pageTwo[5] = "Single + Family";

		}else if ($("input:checkbox[name=family]").is(":checked") && !$("input:checkbox[name=single]").is(":checked")){

			pageTwo[5] = "Family";

		}else if($("input:checkbox[name=single]").is(":checked") && !$("input:checkbox[name=family]").is(":checked")){

			pageTwo[5] = "Single";

		}else{

			pageTwo[5] = "";	

		}


		$(".card_fields").remove();

		if(pageTwo[5] == "Single" || pageTwo[5] == "Family"){

			var tablePage = '<div class ="card_fields" style="display: inline-block;"><label class ="label" for="local_explorer"> Upload Images </label><br><br><input class ="local_explorer" id="my-input" type="file" name="local_explorer" multiple="multiple" onchange="readFiles()"> <br> <label class ="label" onclick="addColumnAndRow'+pageTwo[5]+'()">Add ' + pageTwo[5] +' Section Tables (+)</label><br><br><div class = "tables" align="left"><table class="tg"><tr class = "columns'+pageTwo[5]+'"></tr><tr class = "rows'+pageTwo[5]+'"></tr></table></div><label class = "label" onclick="addColumnAndRowMenu()">Menu</label> <br> <div class = "tables" align="left"><table class="tgMenu" id="menuTable"><tr class = "columnsMenu"></tr><tr class = "rowsMenu"></tr></table></div></div>';

			$(".card").prepend(tablePage);

			$(".main_body").css("height", "auto");
			$(".card").css("width", "1200px");
			$(".card").css("left", "50%");
			$(".card").css("margin-left", "-600px");
			$(".card").css("max-width", "1200px");
			$(".card").css("min-width", "1200px");

			$(".submitButton").unbind().click(function(){

				if(pageTwo[5] == "Single"){
			
					if(files.length == 0){

						alert("Please provide images");

					}else if(seatValuesSingle.length == 0){

						alert("Please provide tables");

					}else{

						$(".card").remove();
						$(".page_header").remove();

						var login_page = '<div class="container"><div class="dummyDiv"><div class ="emailDiv"><input class = "login_fields" type="text" name="email_address" placeholder="Email Address"></div><div class="passwordDiv"><input class = "login_fields" type="password" name="password" placeholder="Password"></div><div class ="submission"><button class ="accountLoginButton" onclick="accountLogin()"> Login </button><button class ="backButton" onclick="goBack()"> Back </button></div></div>';
						$(".main_body").append(login_page);
						$(".main_body").css("height", "auto");
						$(".image").width($(window).width());

						pageCounter = 4;

					}

				}else{

					if(files.length == 0){

						alert("Please provide images");

					}else if(seatValuesFamily.length == 0){

						alert("Please provide tables");

					}else{

						$(".card").remove();
						$(".page_header").remove();

						var login_page = '<div class="container"><div class="dummyDiv"><div class ="emailDiv"><input class = "login_fields" type="text" name="email_address" placeholder="Email Address"></div><div class="passwordDiv"><input class = "login_fields" type="password" name="password" placeholder="Password"></div><div class ="submission"><button class ="accountLoginButton" onclick="accountLogin()"> Login </button><button class ="backButton" onclick="goBack()"> Back </button></div></div>';
						$(".main_body").append(login_page);
						$(".main_body").css("height", "auto");
						$(".image").width($(window).width());

						pageCounter = 4;

					}
				}

			});

			if(pageTwo[5] == "Single"){
				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterSingle; i++){
					$(".columnsSingle").append("<th> T"+(i+1)+"</th>");
					$(".rowsSingle").append("<td>"+seatValuesSingle[i]+"</td>")
				}
			}else if(pageTwo[5] == "Family"){
				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterFamily; i++){
					$(".columnsFamily").append("<th> T"+(i+1)+"</th>");
					$(".rowsFamily").append("<td>"+seatValuesFamily[i]+"</td>")
				}
			}else{
				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterSingle; i++){
					$(".columnsSingle").append("<th> T"+(i+1)+"</th>");
					$(".rowsSingle").append("<td>"+seatValuesSingle[i]+"</td>")
				}

				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterFamily; i++){
					$(".columnsFamily").append("<th> T"+(i+1)+"</th>");
					$(".rowsFamily").append("<td>"+seatValuesFamily[i]+"</td>")
				}
			}

		}else{

			var tablePage = '<div class ="card_fields" style="display: inline-block;"><label class ="label" for="local_explorer"> Upload Images </label><br><br><input class ="local_explorer" id="my-input" type="file" name="local_explorer" multiple="multiple" onchange="readFiles()"> <br><label class ="label" onclick="addColumnAndRowSingle()">Add Single Section Tables (+)</label><br><br><div class = "tablesSingle" align="left"><table class="tg"><tr class = "columnsSingle"></tr><tr class = "rowsSingle"></tr></table></div><label class ="label" onclick="addColumnAndRowFamily()">Add Family Section Tables (+)</label><br><br><div class = "tablesFamily" align="left"><table class="tg"><tr class = "columnsFamily"></tr><tr class = "rowsFamily"></tr></table></div><label class = "label" onclick="addColumnAndRowMenu()">Menu</label> <br> <div class = "tables" align="left"><table class="tgMenu" id="menuTable"><tr class = "columnsMenu"></tr><tr class = "rowsMenu"></tr></table></div></div>';
			$(".card").prepend(tablePage);

			$(".main_body").css("height", "auto");
			$(".card").css("width", "1200px");
			$(".card").css("left", "50%");
			$(".card").css("margin-left", "-600px");
			$(".card").css("max-width", "1200px");
			$(".card").css("min-width", "1200px");

			$(".submitButton").unbind().click(function(){
			
			if(files.length == 0){

				alert("Please provide images");

			}else if(seatValuesSingle.length == 0 || seatValuesFamily.length == 0){

				alert("Please provide tables");

			}else{

				$(".card").remove();
				$(".page_header").remove();

				var login_page = '<div class="container"><div class="dummyDiv"><div class ="emailDiv"><input class = "login_fields" type="text" name="email_address" placeholder="Email Address"></div><div class="passwordDiv"><input class = "login_fields" type="password" name="password" placeholder="Password"></div><div class ="submission"><button class ="accountLoginButton" onclick="accountLogin()"> Login </button><button class ="backButton" onclick="goBack()"> Back </button></div></div>';
				$(".main_body").append(login_page);
				$(".main_body").css("height", "auto");
				$(".image").width($(window).width());

				pageCounter = 4;

			}

			});

				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterSingle; i++){
					$(".columnsSingle").append("<th> T"+(i+1)+"</th>");
					$(".rowsSingle").append("<td>"+seatValuesSingle[i]+"</td>")
				}

				// RE-ASSIGN TABLE VALUES
				for(i = 0; i < tableCounterFamily; i++){
					$(".columnsFamily").append("<th> T"+(i+1)+"</th>");
					$(".rowsFamily").append("<td>"+seatValuesFamily[i]+"</td>")
				}

		}

	}
}


function goBack(){

// GO BACK FROM PAGE TWO
	if(pageCounter == 2){

		pageTwo[0] = String($("input[name=cuisine]").val());
		
		
		pageTwo[1] = String($("input[name=price_range]").val());
		
		pageTwo[2] = String($("input[name=restaurant_phone_number]").val());
		pageTwo[3] = String($("input[name=open_hour]").val());
		pageTwo[4] = String($("input[name=close_hour]").val());

		if($("input:checkbox[name=family]").is(":checked") && $("input:checkbox[name=single]").is(":checked")){

			pageTwo[5] = "Single + Family";

		}else if ($("input:checkbox[name=family]").is(":checked") && !$("input:checkbox[name=single]").is(":checked")){

			pageTwo[5] = "Family";

		}else if($("input:checkbox[name=single]").is(":checked") && !$("input:checkbox[name=family]").is(":checked")){

			pageTwo[5] = "Single";

		}else{

			pageTwo[5] = "";	

		}

		$(".card_fields").remove();
		$(".buttons").remove();

		var home_page = '<div class ="card_fields" style="display: flex;"><div class = "personal_info" align="left"><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="number" name="phone_number" placeholder="..."><label class = "label" for="input[name=email_address]">Email Address</label> <br><input class = "text_fields" type="text" name="email_address" placeholder="..."><label class = "label" for="input[name=password]">Password</label> <br> <input class = "text_fields" type="password" name="password" placeholder="..."></div><div class = "restaurant_info" align="left"><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="text" name="restaurant_zip" placeholder="..."><label class = "label" for="input[name=location]">Restaurant Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..."></div></div><div class ="submission" style="display: flex;"><button class ="backButton" onclick="goBack()"> Back </button><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></div></div></div>';
		$(".card").append(home_page);

		$(".main_body").css("height", "1500px");
		$(".card").css("width", "750px");
		$(".card").css("margin-left", "-375px");
		$(".card").css("left", "50%");
		$(".card").css("max-width", "750px");
		$(".card").css("min-width", "750px");

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$("input[name=first_name]").val(pageOne[0]);
		$("input[name=last_name]").val(pageOne[1]);
		$("input[name=phone_number]").val(pageOne[2]);
		$("input[name=email_address]").val(pageOne[3]);
		$("input[name=password]").val(pageOne[4]);
		$("input[name=restaurant_name]").val(pageOne[5]);
		$("input[name=restaurant_country]").val(pageOne[6]);
		$("input[name=restaurant_city]").val(pageOne[7]);
		$("input[name=restaurant_zip]").val(pageOne[8]);
		$("input[name=location]").val(pageOne[9]);

		$(".text_fields").unbind().keypress(function(e){
				if(e.which == 13){
					storeAndProceed();
				}
			});

		pageCounter = 1;

// GO BACK FROM PAGE THREE
	}else if(pageCounter == 3){

		files = [];

		pageCounter = 2;
		menuCategoryCounter = 0;

		$(".card_fields").remove();
		$(".buttons").remove();

		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br><select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <input class = "text_fields" type="text" name="cuisine" placeholder="..."><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><input class = "text_fields" type="text" name="price_range" placeholder="..."><label class = "label" for="input[name=restaurant_phone_number]">Restaurant Phone Number</label> <br> <input class = "text_fields" type="number" name="restaurant_phone_number" placeholder="..."></div><div class = "availability_information" align="left"><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="open_hour" placeholder="..."><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select><select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select><input class = "text_fields" type="text" name="close_hour" placeholder="..."><label class = "label" for="input[name=family]">Sections</label> <br> <input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> </div><div class = "images"></div></div><div class = "buttons" style="display: flex;"><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';

		$(".card").prepend(continue_page);

		setPriceRangeListener();

		$(".main_body").css("height", "1100px");
		$(".card").css("width", "750px");
		$(".card").css("left", "50%");
		$(".card").css("margin-left", "-375px");
		$(".card").css("max-width", "750px");
		$(".card").css("min-width", "750px");

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		$(".submitButton").removeAttr("onclick");
		$(".submitButton").attr("onclick", "processRegistration()")

		$(".text_fields").unbind().keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		$(".seat_field").unbind().keypress(function(e){
			if(e.which == 13){
				processRegistration();
			}
		});

		if(pageTwo[0] != null){

			$("input[name=cuisine]").val(pageTwo[0]);
			$("input[name=price_range]").val(pageTwo[1]);
			$("input[name=restaurant_phone_number]").val(pageTwo[2]);

			$("input[name=open_hour]").val(pageTwo[3]);

			if(pageTwo[1] == "cheap"){

				$(".price_range_list #1").css("color", "#EB2748");

			}else if(pageTwo[1] == "semi-moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");

			}else if(pageTwo[1] == "moderate"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");

			}else if(pageTwo[1] == "semi-expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");

			}else if(pageTwo[1] == "expensive"){

				$(".price_range_list #1").css("color", "#EB2748");
				$(".price_range_list #2").css("color", "#EB2748");
				$(".price_range_list #3").css("color", "#EB2748");
				$(".price_range_list #4").css("color", "#EB2748");
				$(".price_range_list #5").css("color", "#EB2748");

			}else{

				// DO NOTHING

			}

			$("input[name=close_hour]").val(pageTwo[4]);
			$("input[name=sections]").val(pageTwo[5]);

			if(pageTwo[5] == "Family"){

				$("input:checkbox[name=family]").prop("checked", true);

			}else if(pageTwo[5] == "Single"){

				$("input:checkbox[name=single]").prop("checked", true);

			}else if(pageTwo[5] == "Single + Family"){

				$("input:checkbox[name=single]").prop("checked", true);
				$("input:checkbox[name=family]").prop("checked", true);

			}else{

				// DO NOTHING

			}

		}


	}else if(pageCounter == 1){	

		$(".container").remove();
		var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" onclick="signupPage()"> Signup </button></div></div>';
		$(".main_body").append(portal_page);
		$(".main_body").css("height", "auto");
		$(".image").width($(window).width());

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

	}else{

		$(".container").remove();
		var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" onclick="signupPage()"> Signup </button></div></div>';
		$(".main_body").append(portal_page);
		$(".main_body").css("height", "auto");
		$(".image").width($(window).width());

		$(".submitButton").css("position", "absolute");
		$(".submitButton").css("right", "50px");

		pageCounter = 1;

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

	$(".price_range_list li").unbind().click(function() {
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

// ADD TABLE COLUMNS AND ROWS FOR SINGLE SECTION
function addColumnAndRowSingle(){

	if(tableCounterSingle > 24){

		alert("Maximum Capacity Reached.");

	}else{

	// -------------------------------------------------------------------------------------

		let seatNumberSingle = prompt("This table occupies how many customers?");

	// -------------------------------------------------------------------------------------	

		if(seatNumberSingle == null){

			// DO NOTHING

		}else{

			let tableCountSingle = prompt("How many of this table do you want to add?");

			if(tableCountSingle > 35){

				alert("Maximum capacity is 35");

			}else{

				if(tableCountSingle != null){

					for(i = 0; i < tableCountSingle; i++){
						tableCounterSingle++;
						$(".columnsSingle").append("<th> T" + (tableCounterSingle) + " </th>");
						$(".rowsSingle").append("<td>" + seatNumberSingle + "</td>");
						seatValuesSingle.push(seatNumberSingle);
					}

				}
			}

		}
	}

}

// ADD TABLE COLUMNS AND ROWS FOR FAMILY SECTION
function addColumnAndRowFamily(){

	if(tableCounterFamily > 35){

		alert("Maximum Capacity Reached.");

	}else{

	// -------------------------------------------------------------------------------------

		let seatNumberFamily = prompt("This table occupies how many customers?");

	// -------------------------------------------------------------------------------------	

		if(seatNumberFamily == null){

			// DO NOTHING

		}else{

			let tableCountFamily = prompt("How many of this table do you want to add?");

			if(tableCountFamily > 35){

				alert("Maximum capacity is 35");

			}else{

				if(tableCountFamily != null){

					for(i = 0; i < tableCountFamily; i++){
						tableCounterFamily++;
						$(".columnsFamily").append("<th> T" + (tableCounterFamily) + " </th>");
						$(".rowsFamily").append("<td>" + seatNumberFamily + "</td>");
						seatValuesFamily.push(seatNumberFamily);
					}

				}
			}
		}
	}

}

// ADD TABLE COLUMNS AND ROWS FOR FAMILY SECTION
function addColumnAndRowMenu(){

	if(menuCategoryCounter > 10){

		alert("You have reached maximum capacity.")
	
	}else{

		var categoryName;

		while(categoryName = prompt("Input menu categories. Cancel when finished. ", "")){

			menuCategoryCounter++;

			$(".columnsMenu").append('<th id="column' + menuCategoryCounter +'" onclick="insertMenuItems('+ String(menuCategoryCounter) +')">' + categoryName + '</th>');
			$(".rowsMenu").append('<td id="cell' + menuCategoryCounter + '"></td>');

			categoryMenu.push(new MenuCategory(categoryName, []));

		}

	}

}

// INSERT CATEGORY MENU LIST ITEMS
function insertMenuItems(menuCategoryCounter){

	var modal = document.getElementById('myModal');
	modal.style.display = 'block';
	var i = 0;

	$(".add").unbind().click(function(){
		
		// IF THIS IS NOT THE FIRST ATTEMPT TO ADD (INSERT FUNCTION CALLED REPETITIVELY)
		if(i >= 1){

			// CHECK IF THE TABLE ROW LENGTH IS LONGER THAN THE CURRENT INDEX, IF SO
			if(($('.tgMenu').find('.rowsMenu').length) > i){

				var fullFlag = true;

				// LOOP UNTIL THE FIRST EMPTY INDEX AND FILL IT
				for(j = 0; j < $('.tgMenu').find('.rowsMenu').length; j++){
					if(document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1].textContent == ""){
						var x = document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1];	
						fullFlag = false;
						x.innerHTML = "CONTENT";
						break;
					}
				}

				// IF NO EMPTY INDEX (THIS COLUMN HAS ALL ITS ROWS MAXED)
				if(fullFlag){

					// INSERT NEW ROWS WITH ITS COLUMNS
					$(".tgMenu").append('<tr class = "rowsMenu" id="rowsMenu' + String($(".tgMenu").find(".rowsMenu").length) + '"></tr>');

					for(k = 0; k < categoryMenu.length; k++){

						$('#rowsMenu' + String($(".tgMenu").find(".rowsMenu").length-1) + '').append('<td></td>');
						
					}

					// FILL THE CELLS
					var x = document.getElementById("menuTable").rows[$(".tgMenu").find(".rowsMenu").length].cells[menuCategoryCounter-1];	
					x.innerHTML = "CONTENT";

				}

			// IF THE CURRENT INDEX IS AT THE SAME POSITION AS TABLE ROW COUNT
			}else{

				// ADD NEW ROW AND COLUMNS
				for(j = (i-1); j < i; j++){

					$(".tgMenu").append('<tr class = "rowsMenu" id="rowsMenu' + i + '"></tr>');

					for(k = 0; k < categoryMenu.length; k++){

						$('#rowsMenu' + String(i) + '').append('<td ></td>');

					}

				}

				// INSERT INFO INTO CELLS
				var x = document.getElementById("menuTable").rows[i+1].cells[menuCategoryCounter-1];	
				x.innerHTML = "CONTENT";

			}

		// IF THIS IS THE FIRST INSERT FUNCTION CALL
		}else{

			var fullFlag = true;

			// LOOP UNTIL THE FIRST EMPTY INDEX AND FILL IT
			for(j = 0; j < $('.tgMenu').find('.rowsMenu').length; j++){
				if(document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1].textContent == ""){
					var x = document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1];	
					fullFlag = false;
					x.innerHTML = "CONTENT";
					break;
				}
			}

			// IF NO EMPTY INDEX (THIS COLUMN HAS ALL ITS ROWS MAXED)
			if(fullFlag){

				// INSERT NEW ROWS WITH ITS COLUMNS
				$(".tgMenu").append('<tr class = "rowsMenu" id="rowsMenu' + String($(".tgMenu").find(".rowsMenu").length) + '"></tr>');

				for(k = 0; k < categoryMenu.length; k++){

					$('#rowsMenu' + String($(".tgMenu").find(".rowsMenu").length-1) + '').append('<td ></td>');

				}


				// FILL THE CELLS
				var x = document.getElementById("menuTable").rows[$(".tgMenu").find(".rowsMenu").length].cells[menuCategoryCounter-1];	
				x.innerHTML = "CONTENT";

			}

		}

		$("input[name=food_name]").val("");
		$("input[name=food_description]").val("");
		$("input[name=food_price]").val("");
		i++;

	});


	// ON DIALOG BOX (MODAL) CLICK OUTSIDE, CANCEL WINDOW AND RESET FIELDS
	window.onclick = function(event) {

		if (event.target == modal) {

			modal.style.display = "none";
			i = 0;
			$("input[name=food_name]").val("");
			$("input[name=food_description]").val("");
			$("input[name=food_price]").val("");

		}
    }
}

// FLUSH ALL DATA
function deleteRecords(){

	counter = 0;
	fadeoutCounter = 0;
	tableCounterSingle = 0;
	tableCounterFamily = 0;
	pageCounter = 0;
	files = [];
	menuCategoryCounter = 0;
	c1 = 0;
	c2 = 0;

	pageOne = [null, null, null, null, null, null, null, null, null, null];
	pageTwo = [null, null, null, null, null, null];
	seatValuesSingle = [];
	seatValuesFamily = [];
	categoryMenu = [];

}

// LOGIN FUNCTION
function accountLogin(){

	if($("input[name=email_address]").val() != "" && $("input[name=password]").val() != ""){

		// DO FIREBASE

		deleteRecords();

		alert("DO FIREBASE. RECORDS DELETED");
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