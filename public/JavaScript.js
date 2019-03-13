var counter = 0;
var fadeoutCounter = 0;
var tableCounterSingle = 0;
var tableCounterFamily = 0;
var pageCounter = 0;
var files = [];
var menuCategoryCounter = 0;

var pageOne = [null, null, null, null, null, null, null, null, null, null];
var pageTwo = [null, null, null, null, null, null];
var seatValuesSingle = [];
var seatValuesFamily = [];
var categoryMenu = [];

var tableListS = [];
var tableListF = [];
var imageUrls = [];


class Person{
	constructor(first_name, last_name, mobile_number, email){
		this.first_name = first_name;
		this.last_name = last_name;
		this.mobile_number = mobile_number;
		this.email = email;
	}
}

class Restaurant{
	constructor(firebase_id, person, restaurant_name, restaurant_country, restaurant_city,
	 restaurant_zip, restaurant_location, restaurant_cuisine, restaurant_price,
	  restaurant_telephone, restaurant_open, restaurant_close, sections, tableListSingle, 
	  tableListFamily, menuItems, imageList){
	  	this.firebase_id = firebase_id;
	   	this.person = person;
	   	this.restaurant_name = restaurant_name;
	   	this.restaurant_country = restaurant_country;
	   	this.restaurant_city = restaurant_city;
	   	this.restaurant_zip = restaurant_zip;
	   	this.restaurant_location = restaurant_location;
	   	this.restaurant_cuisine = restaurant_cuisine;
	   	this.restaurant_price = restaurant_price;
	   	this.restaurant_telephone = restaurant_telephone;
	   	this.restaurant_open = restaurant_open;
	   	this.restaurant_close = restaurant_close;
	   	this.sections = sections;
	   	this.tableListSingle = tableListSingle;
	   	this.tableListFamily = tableListFamily;
	   	this.menuItems = menuItems;
	   	this.imageList = imageList;
	}
}

class Tables{
	constructor(tableCount, seatCount){
		this.tableCount = tableCount;
		this.seatCount = seatCount;
	}
}

class MenuCategory {
  constructor(menuCategory, menuItems) {
    this.menuCategory = menuCategory;
    this.menuItems = menuItems;
  }
}

class MenuItem {
	constructor(name, price, description, image, file){
		this.name = name;
		this.price = price;
		this.description = description;
		this.image = image;
		this.file = file;
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
	var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" id="test" onclick="signupPage()"> Signup </button></div></div>';
	$(".main_body").append(portal_page);
	$(".main_body").css("height", "auto");
	$(".image").width($(window).width());
}

// BUILD LOGIN PAGE
function loginPage(){

	$(".container").remove();

	var login_page = '<div class="container"><div class="dummyDiv"><div class ="emailDiv"><input class = "login_fields" type="text" name="email_address" placeholder="Email Address"></div><div class="passwordDiv"><input class = "login_fields" type="password" name="password" placeholder="Password"></div><div class ="submission" style="display: inline-flex;"><button class ="accountLoginButton" onclick="accountLogin()"> Login </button><button class ="backButton" onclick="goBack()"> Back </button></div></div></div>';
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
	$(".container").remove()
	var home_page = '<div class="container"><div class ="page_header"><div class ="page_message"><center><p class ="title"> Restaurant Registration Form </p></center><center><p class ="description"> Please fill out the following form and we\'ll contact you through email or phone once your submission has been reviewed. <br><br>For any inquiries, contact us at BooKT19.15@gmail.com</p></center></div></div><div class="card"><div class ="card_fields"><div class = "personal_info" align="left"><div><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."></div><div><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."></div><div><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="number" name="phone_number" placeholder="..."></div><div><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."></div><div><label class = "label" for="input[name=password]">Password</label> <br> <input class = "text_fields" type="password" name="password" placeholder="..."></div></div><div class = "restaurant_info" align="left"><div><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="number" name="restaurant_zip" placeholder="..."></div><div><label class = "label" for="input[name=location]">Restaurant Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..." onfocus="alertBox()"></div></div></div><div class ="submission"><button class ="backButton" onclick="goBack()"> Back </button><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></div></div>';
	$(".main_body").append(home_page);
	$(".main_body").css("height", "1500px");
	$(".image").width($(window).width());

	$("input[name=restaurant_country]").prop("value", "Saudi Arabia");
	$("input[name=restaurant_city]").prop("value", "Jeddah");

	$("input[name=restaurant_country]").prop("disabled", true);
	$("input[name=restaurant_city]").prop("disabled", true);

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

		if(hasNumber($("input[name=first_name]").val()) == -1 &&
			hasNumber($("input[name=last_name]").val()) == -1 &&
			hasNumber($("input[name=restaurant_name]").val()) == -1 &&
			hasNumber($("input[name=restaurant_country]").val()) == -1 &&
			hasNumber($("input[name=restaurant_city]").val()) == -1){

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

//<select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select>
//<select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select>
		var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br> <select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <div><input class = "text_fields" type="text" name="cuisine" placeholder="..."></div><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><div><input class = "text_fields" type="text" name="price_range" placeholder="..."></div><label class = "label" for="input[name=restaurant_phone_number]">Restaurant Phone Number</label> <br> <div><input class = "text_fields" type="number" name="restaurant_phone_number" placeholder="..."></div></div><div class = "availability_information" align="left"><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="zero">0</option><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option><option value="thirteen">13</option><option value="fourteen">14</option><option value="fifteen">15</option><option value="sixteen">16</option><option value="seventeen">17</option><option value="eighteen">18</option><option value="nineteen">19</option><option value="twenty">20</option><option value="twenty-one">21</option><option value="twenty-two">22</option><option value="twenty-three">23</option></select><div><input class = "text_fields" type="text" name="open_hour" placeholder="..."></div><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="zero">0</option><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option><option value="thirteen">13</option><option value="fourteen">14</option><option value="fifteen">15</option><option value="sixteen">16</option><option value="seventeen">17</option><option value="eighteen">18</option><option value="nineteen">19</option><option value="twenty">20</option><option value="twenty-one">21</option><option value="twenty-two">22</option><option value="twenty-three">23</option></select><div><input class = "text_fields" type="text" name="close_hour" placeholder="..."></div><label class = "label" for="input[name=family]">Sections</label> <br><input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> </div><div class = "images"></div></div><div class = "submission" ><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';
//<select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select>
//<select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select>
		$(".card").prepend(continue_page);

		setPriceRangeListener();

		$(".main_body").css("height", "1100px");

		$("input[name=cuisine]").prop("disabled", true);
		$("input[name=price_range]").prop("disabled", true);
		$("input[name=open_hour]").prop("disabled", true);
		$("input[name=close_hour]").prop("disabled", true);

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
	}else{

		alert("Some fields only accept letters. Others only accept numbers.");

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

			var tablePage = '<div class ="card_fields" style="display: inline-block;"><label class ="label" for="local_explorer"> Upload Images </label><br><br><input class ="local_explorer" id="my-input" type="file" name="local_explorer" multiple="multiple" onchange="readFiles()"> <br> <label class ="label" onclick="addColumnAndRow'+pageTwo[5]+'()">Add ' + pageTwo[5] +' Section Tables (+)</label><br><br><div class = "tables" align="left"><table class="tg"><tr class = "columns'+pageTwo[5]+'"></tr><tr class = "rows'+pageTwo[5]+'"></tr></table></div><label class = "label" onclick="addColumnAndRowMenu()">Add Menu (+)</label> <br> <div class = "tables" align="left"><table class="tgMenu" id="menuTable"><tr class = "columnsMenu"></tr><tr class = "rowsMenu"></tr></table></div></div>';

			$(".card").prepend(tablePage);
			$(".card").css("left", "0");
			$(".card").css("width", "100%");
			$(".card").css("margin-left", "0");

			$(".main_body").css("height", "auto");

			$(".submitButton").unbind().click(function(){

				// DO LOGIC HERE

				if(pageTwo[5] == "Single"){
			
					if(files.length == 0){

						alert("Please provide images");

					}else if(seatValuesSingle.length == 0){

						alert("Please provide tables");

					}else{

						showWait();
						firebaseRecordsUpload();
						// CHECK HERE FOR MENU STRUCTURE LOGIC
						// console.log(categoryMenu);

					}

				}else{

					if(files.length == 0){

						alert("Please provide images");

					}else if(seatValuesFamily.length == 0){

						alert("Please provide tables");

					}else{

						// EDIT HERE

						showWait();
						firebaseRecordsUpload();

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

			var tablePage = '<div class ="card_fields" style="display: inline-block;"><label class ="label" for="local_explorer"> Upload Images </label><br><br><input class ="local_explorer" id="my-input" type="file" name="local_explorer" multiple="multiple" onchange="readFiles()"> <br><label class ="label" onclick="addColumnAndRowSingle()">Add Single Section Tables (+)</label><br><br><div class = "tablesSingle" align="left"><table class="tg"><tr class = "columnsSingle"></tr><tr class = "rowsSingle"></tr></table></div><label class ="label" onclick="addColumnAndRowFamily()">Add Family Section Tables (+)</label><br><br><div class = "tablesFamily" align="left"><table class="tg"><tr class = "columnsFamily"></tr><tr class = "rowsFamily"></tr></table></div><label class = "label" onclick="addColumnAndRowMenu()">Add Menu (+)</label> <br> <div class = "tables" align="left"><table class="tgMenu" id="menuTable"><tr class = "columnsMenu"></tr><tr class = "rowsMenu"></tr></table></div></div>';

			$(".main_body").css("height", "auto");
			$(".card").prepend(tablePage);
			$(".card").css("left", "0");
			$(".card").css("width", "100%");
			$(".card").css("margin-left", "0");

			$(".submitButton").unbind().click(function(){

				// DO LOGIC HERE
			
				if(files.length == 0){

					alert("Please provide images");

				}else if(seatValuesSingle.length == 0 || seatValuesFamily.length == 0){

					alert("Please provide tables");

				}else{

					// EDIT HERE

					showWait();
					firebaseRecordsUpload();

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

		$(".card").remove();
		$(".submission").remove();

		var home_page = '<div class="card"><div class ="card_fields"><div class = "personal_info" align="left"><div><label class = "label" for="input[name=first_name]">First Name</label> <br> <input class = "text_fields" type="text" name="first_name" placeholder="..."></div><div><label class = "label" for="input[name=last_name]">Last Name</label> <br> <input class = "text_fields" type="text" name="last_name" placeholder="..."></div><div><label class = "label" for="input[name=phone_number]">Mobile Number</label> <br> <input class = "text_fields" type="number" name="phone_number" placeholder="..."></div><div><label class = "label" for="input[name=email_address]">Email Address</label> <br> <input class = "text_fields" type="text" name="email_address" placeholder="..."></div><div><label class = "label" for="input[name=password]">Password</label> <br> <input class = "text_fields" type="password" name="password" placeholder="..."></div></div><div class = "restaurant_info" align="left"><div><label class = "label" for="input[name=restaurant_name]">Restaurant Name</label> <br> <input class = "text_fields" type="text" name="restaurant_name" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_country]">Restaurant Country</label> <br> <input class = "text_fields" type="text" name="restaurant_country" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_city]">Restaurant City</label> <br> <input class = "text_fields" type="text" name="restaurant_city" placeholder="..."></div><div><label class = "label" for="input[name=restaurant_zip]">Restaurant Zipcode</label> <br> <input class = "text_fields" type="number" name="restaurant_zip" placeholder="..."></div><div><label class = "label" for="input[name=location]">Restaurant Location</label> <br> <input class = "text_fields" type="text" name="location" placeholder="..." onfocus="alertBox()"></div></div></div><div class ="submission" class = "submission"><button class ="backButton" onclick="goBack()"> Back </button><button class ="submitButton" onclick="storeAndProceed()"> Continue </button></div></div>';
		$(".main_body").append(home_page);

		$(".main_body").css("height", "1500px");

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

		$("input[name=restaurant_country]").prop("disabled", true);
		$("input[name=restaurant_city]").prop("disabled", true);

		$(".text_fields").unbind().keypress(function(e){
				if(e.which == 13){
					storeAndProceed();
				}
			});

		pageCounter = 1;

// GO BACK FROM PAGE THREE
	}else if(pageCounter == 3){

		try {

		let state = prompt("Files and Menu items will not be saved if you go back. You will have to input them again from scratch. Type Y if you want to go back.");

		if(state.toLowerCase() == "y" || state.toLowerCase() == "yes" || state.toLowerCase() == "ye"){

			categoryMenu = [];

			files = [];

			pageCounter = 2;
			menuCategoryCounter = 0;

			$(".card_fields").remove();
			$(".submission").remove();
//<select class ="open_minute_select" onchange="setTextOpen()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select>
//<select class="open_am_pm" onchange="setTextOpen()"><option value="am">AM</option><option value="pm">PM</option></select>
			var continue_page = '<div class ="card_fields"><div class = "food_information" align="left"><label class = "label" for="input[name=cuisine]">Cuisine</label> <br> <select class="cuisine_select" onchange="setTextCuisine()"><option value="african">African</option><option value="american">American</option><option value="british">British</option><option value="caribbean">Caribbean</option><option value="chinese">Chinese</option><option value="east_european">East European</option><option value="french">French</option><option value="greek">Greek</option><option value="indian">Indian</option><option value="irish">Irish</option><option value="italian">Italian</option><option value="japanese">Japanese</option><option value="korean">Korean</option><option value="mexican">Mexican</option><option value="nordic">Nordic</option><option value="north_african">North African</option><option value="pakistani">Pakistani</option><option value="portuguese">Portuguese</option><option value="south_american">South American</option><option value="spanish">Spanish</option><option value="thai_south_east_asia">Thai - South East Asia</option><option value="turkish">Turkish</option><option value="middle_eastern">Middle Eastern</option></select> <div><input class = "text_fields" type="text" name="cuisine" placeholder="..."></div><label class = "label" for="input[name=price_range]">Price Range</label> <br> <ul class="price_range_list"><li id="1">$</li><li id="2">$</li><li id="3">$</li><li id="4">$</li><li id="5">$</li></ul><div><input class = "text_fields" type="text" name="price_range" placeholder="..."></div><label class = "label" for="input[name=restaurant_phone_number]">Restaurant Phone Number</label> <br> <div><input class = "text_fields" type="number" name="restaurant_phone_number" placeholder="..."></div></div><div class = "availability_information" align="left"><label class = "label" for="input[name=open_hour]">Open Hour</label> <br> <select class="open_hour_select" onchange="setTextOpen()"><option value="zero">0</option><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><div><input class = "text_fields" type="text" name="open_hour" placeholder="..."></div><label class = "label" for="input[name=close_hour]">Close Hour</label> <br><select class="close_hour_select" onchange="setTextClose()"><option value="zero">0</option><option value="one">1</option><option value="two">2</option><option value="three">3</option><option value="four">4</option><option value="five">5</option><option value="six">6</option><option value="seven">7</option><option value="eight">8</option><option value="nine">9</option><option value="ten">10</option><option value="eleven">11</option><option value="twelve">12</option></select><div><input class = "text_fields" type="text" name="close_hour" placeholder="..."></div><label class = "label" for="input[name=family]">Sections</label> <br><input class ="sections" type="checkbox" name ="family">Family<input class ="sections" type="checkbox" name ="single">Single <br><br><br> </div><div class = "images"></div></div><div class = "submission" ><button class ="submitButton" onclick="storeAndProceed()"> Continue </button><button class ="backButton" onclick="goBack()"> Back </button></div>';
//<select class ="close_minute_select" onchange="setTextClose()"><option value="zero">0</option><option value="five">5</option><option value="ten">10</option><option value="fifteen">15</option><option value="twenty">20</option><option value="twenty-five">25</option><option value="thirty">30</option><option value="thirty-five">35</option><option value="fourty">40</option><option value="fourty-five">45</option><option value="fifty">50</option><option value="fifty-five">55</option></select>
//<select class="close_am_pm" onchange="setTextClose()"><option value="am">AM</option><option value="pm">PM</option></select>
			$(".card").prepend(continue_page);

			$(".card").css("left", "50%");
			$(".card").css("width", "auto");
			$(".card").css("margin-left", "-375px");

			setPriceRangeListener();

			$(".main_body").css("height", "1100px");

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

		}else{

			// DO NOTHING

		}

		}catch(err){
			// DO NOTHING
		}

	}else if(pageCounter == 1){	

		$(".container").remove();
		var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" onclick="signupPage()"> Signup </button></div></div>';
		$(".main_body").append(portal_page);
		$(".main_body").css("height", "auto");
		$(".image").width($(window).width());

	}else{

		$(".container").remove();
		var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" onclick="signupPage()"> Signup </button></div></div>';
		$(".main_body").append(portal_page);
		$(".main_body").css("height", "auto");
		$(".image").width($(window).width());

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
	// $("input[name=open_hour]").val($('.open_hour_select').find(":selected").text() + ":00");
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
	// $("input[name=close_hour]").val($('.close_hour_select').find(":selected").text() + ":00");
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

	if(tableCounterSingle > 35){

		alert("Maximum Capacity Reached.");

	}else{

	// -------------------------------------------------------------------------------------

		let seatNumberSingle = prompt("This table occupies how many customers?");

	// -------------------------------------------------------------------------------------	

		if(seatNumberSingle == null || hasString(String(seatNumberSingle)) == 0){

			alert("Please provide numbers only");

		}else{

			let tableCountSingle = prompt("How many of this table do you want to add?");

			if(tableCountSingle > 35 || (Number(tableCounterSingle)+Number(tableCountSingle)) > 35){

				alert("Maximum capacity is 35");

			}else{

				if(tableCountSingle != null && hasString(String(tableCountSingle)) != 0){

					tableListS.push(new Tables(tableCountSingle, seatNumberSingle));

					for(i = 0; i < tableCountSingle; i++){
						tableCounterSingle++;
						$(".columnsSingle").append("<th> T" + (tableCounterSingle) + " </th>");
						$(".rowsSingle").append("<td>" + seatNumberSingle + "</td>");
						seatValuesSingle.push(seatNumberSingle);
					}

				}else{

					alert("Please provide only numbers");

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

		if(seatNumberFamily == null || hasString(String(seatNumberFamily)) == 0){

			alert("Please provide only numbers");

		}else{

			let tableCountFamily = prompt("How many of this table do you want to add?");
			
			if(tableCountFamily > 35 || (Number(tableCountFamily)+Number(tableCounterFamily)) > 35){

				alert("Maximum capacity is 35");

			}else{

				tableListF.push(new Tables(tableCountFamily, seatNumberFamily));

				if(tableCountFamily != null && hasString(String(tableCountFamily)) != 0){

					for(i = 0; i < tableCountFamily; i++){
						tableCounterFamily++;
						$(".columnsFamily").append("<th> T" + (tableCounterFamily) + " </th>");
						$(".rowsFamily").append("<td>" + seatNumberFamily + "</td>");
						seatValuesFamily.push(seatNumberFamily);
					}

				}else{

					alert("Please provide only numbers");

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

			if(hasNumber(categoryName) == -1){

				menuCategoryCounter++;

				$(".columnsMenu").append('<th id="column' + menuCategoryCounter +'" onclick="insertMenuItems('+ String(menuCategoryCounter) +')">' + categoryName + '</th>');
				$(".rowsMenu").append('<td id="cell' + menuCategoryCounter + '"></td>');

				categoryMenu.push(new MenuCategory(categoryName, []));

			}else{

				alert("Please provide only letters");

			}

		}

	}

}

// INSERT CATEGORY MENU LIST ITEMS
function insertMenuItems(menuCategoryCounter){

	var modal = document.getElementById('myModal');
	modal.style.display = 'block';
	var i = 0;

	$(".add").unbind().click(function(){

		var menuImage = $('input[name=menu_image_explorer]').prop('files')[0];
		// console.log(menuImage.type);

		if(($("input[name=food_name]").val() != "" && $("input[name=food_description]").val() != "" && $("input[name=food_price]").val() != "") && 
			(hasNumber($("input[name=food_name]").val()) == -1 && hasNumber($("input[name=food_description]").val()) == -1 && hasString(String($("input[name=food_price]").val())) != 0) &&
			(menuImage.type == "image/jpeg" || menuImage.type == "image/png" || menuImage.type == "image/jpg" || menuImage.type == "image/pdf")){
		
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
						x.innerHTML = $("input[name=food_name]").val() + "<br>" + $("input[name=food_price]").val();
						categoryMenu[menuCategoryCounter-1].menuItems[j] = new MenuItem($("input[name=food_name]").val(), $("input[name=food_price]").val(), $("input[name=food_description]").val(), "", menuImage);
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
					x.innerHTML = $("input[name=food_name]").val() + "<br>" + $("input[name=food_price]").val();
					categoryMenu[menuCategoryCounter-1].menuItems[j] = new MenuItem($("input[name=food_name]").val(), $("input[name=food_price]").val(), $("input[name=food_description]").val(), "", menuImage);

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
				x.innerHTML = $("input[name=food_name]").val() + "<br>" + $("input[name=food_price]").val();
				categoryMenu[menuCategoryCounter-1].menuItems[j] = new MenuItem($("input[name=food_name]").val(), $("input[name=food_price]").val(), $("input[name=food_description]").val(), "", menuImage);

			}

		// IF THIS IS THE FIRST INSERT FUNCTION CALL
		}else{

			var fullFlag = true;

			// LOOP UNTIL THE FIRST EMPTY INDEX AND FILL IT
			for(j = 0; j < $('.tgMenu').find('.rowsMenu').length; j++){
				if(document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1].textContent == ""){
					var x = document.getElementById("menuTable").rows[j+1].cells[menuCategoryCounter-1];	
					fullFlag = false;
					x.innerHTML = $("input[name=food_name]").val() + "<br>" + $("input[name=food_price]").val();
					categoryMenu[menuCategoryCounter-1].menuItems[j] = new MenuItem($("input[name=food_name]").val(), $("input[name=food_price]").val(), $("input[name=food_description]").val(), "", menuImage);
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
				x.innerHTML = $("input[name=food_name]").val() + "<br>" + $("input[name=food_price]").val();
				categoryMenu[menuCategoryCounter-1].menuItems[j] = new MenuItem($("input[name=food_name]").val(), $("input[name=food_price]").val(), $("input[name=food_description]").val(), "", menuImage);

			}

		}

		$("input[name=food_name]").val("");
		$("input[name=food_description]").val("");
		$("input[name=food_price]").val("");
		$("input[name=menu_image_explorer]").val("");
		i++;

	}else{

		alert("Food name and description only accept letters. Food price only takes in numbers. Image only accepts JPEG, JPG, PNG.");

	}

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

	pageOne = [null, null, null, null, null, null, null, null, null, null];
	pageTwo = [null, null, null, null, null, null];
	seatValuesSingle = [];
	seatValuesFamily = [];
	categoryMenu = [];

}

// LOGIN FUNCTION
function accountLogin(){

	if($("input[name=email_address]").val() != "" && $("input[name=password]").val() != ""){

		// DO FIREBASE AUTHENTICATION

		alert("Login is not implemented yet.");
	}
}

// READ LOCAL FILES
function readFiles(){
	files = document.getElementById("my-input").files;
	for(i = 0; i < files.length; i++){
		if(String(files[i].type) === "image/jpeg" || String(files[i].type) === "image/png" || String(files[i].type) === "image/jpg" || String(files[i].type) === "image/pdf"){
			// DO NOTHING
		}else{
			alert("Incorrect file extensions. Please only provide JPG, JPEG, PNG or PDF files");
			files = [];
			$("input[name=local_explorer]").prop("value", "");
			break;
		}
	}
}

// SET CUISINE TEXT
function setTextCuisine(){
	$("input[name=cuisine]").val($(".cuisine_select").find(":selected").text());
}

// CHECK FOR NUMBERS IN STRING
function hasNumber(myString){
	var regex = /[^a-zA-Z\s]/;
	return myString.search(regex);
}

// CHECK FOR STRING IN NUMBER
function hasString(myString){
	var regex = /[^0-9]/;
	var result1 = myString.search(regex);

	if(result1 == 0){
		return 0;
	}else{
		return -1;
	}
}

// START WAITING ANIMATION
function showWait(){
	$(".card").append('<div class="lds-dual-ring"></div>');
	$(".lds-dual-ring").css("display", "inline-block");
}

// CANCEL WAITING ANIMATION
function cancelWait(){
	$(".lds-dual-ring").css("display", "none");
}

// FUNCTION TO ALERT ON LOCATION INPUT FOCUS
function alertBox(){
	alert("To enter your location, please do the following:\n\n1) Go to Google Maps and pin a location\n\n2) Click on the coordinates that popped up on the bottom of the screen, the marker will turn red.\n\n3) Now, copy the URL (search tab text) and paste it into the location field.");
	$("input[name=location]").removeAttr("onfocus");
}

// UPLOAD REGISTRATION TO FIREBASE
function firebaseRecordsUpload(){

	var keyOriginal = "";

	firebase.auth().createUserWithEmailAndPassword(pageOne[3], pageOne[4])
	.then(function success(userCredential){
        var userData = userCredential.user;
        var uid = userData.uid;
        keyOriginal = uid;
        // console.log(keyOriginal);

        // write values to database
 		var databaseRef = firebase.database().ref().child('QueueList').child(String(keyOriginal));

 		var filesList = [];

		// STORING NAMES ONLY
		for(i = 0; i < files.length; i++){
			filesList.push(files[i].name);
		}

 		const person = new Person(pageOne[0], pageOne[1], pageOne[2], pageOne[3]);

		// USING IMAGE NAMES FOR THE RESTAURANT NODE IN FIREBASE
		const restaurant = new Restaurant(keyOriginal, person, pageOne[5], pageOne[6], pageOne[7],
 		pageOne[8], pageOne[9], pageTwo[0], pageTwo[1], pageTwo[2], pageTwo[3], pageTwo[4], pageTwo[5],
 		tableListS, tableListF, categoryMenu, filesList);

		databaseRef.set(restaurant);

		filesAndStorage(keyOriginal, databaseRef);

  	//Here if you want you can sign in the user
	}).catch(function(error) {
    	alert(error.message);
    	cancelWait();
	});

}

function filesAndStorage(keyOriginal, databaseRef){

	var keyOriginal = keyOriginal;
	var databaseRef = databaseRef;

 	// STORING GALLERY IMAGES BASED ON USER REGISTRATION KEY GENERATED ABOVE
 	for(j = 0; j < files.length; j++){

 		// THE IMAGES ARE STORED INTO A FOLDER WITH THE REGISTERED KEY
		var storageRef = firebase.storage().ref(String(keyOriginal)+'/galleryImages/'+files[j].name);
  		var task = storageRef.put(files[j]);

  		task.then(function(snapshot){
  			snapshot.ref.getDownloadURL().then(function(downloadURL) {
    			imageUrls.push(downloadURL);
    			databaseRef.child('imageList').set(imageUrls);
  			});
  		});
  	}

	// STORAGE OF MENU IMAGES BASED BASED ON CATEGORY AND MENU NUMBER
  	for(i = 0; i < categoryMenu.length; i++){

  		var list = categoryMenu[i].menuItems;

  		for(j = 0; j < list.length; j++){

  			var storageRef = firebase.storage().ref(String(keyOriginal) + '/menuImages/' + String(i) + String(j) + "_MOA19" + list[j].file.name);
  			var task = storageRef.put(list[j].file);

  			task.then(function(snapshot){

  				snapshot.ref.getDownloadURL().then(function(downloadURL){
  					var startIndex = String(downloadURL).indexOf("_MOA19")-2;
  					var endIndex = startIndex + 1;

  					// console.log(String(downloadURL).charAt(endIndex));
  					// console.log(String(downloadURL).charAt(startIndex));

  					databaseRef.child('menuItems')
  					.child(String(downloadURL).charAt(startIndex))
  					.child('menuItems')
  					.child(String(downloadURL).charAt(endIndex))
  					.child("image")
  					.set(String(downloadURL));

  					databaseRef.child("firebase_id").set(keyOriginal);
  					
  				});
  			});
  		}
  	}

  	imageUrls = [];

  	var dbRef = firebase.database().ref().child('QueueList');
  	dbRef.once('value', function(snapshot) {
  	if (snapshot.hasChild(String(keyOriginal))) {

  		deleteRecords();
	
		$(".card").remove();
		$(".page_header").remove();

		var portal_page = '<div class="container"><div class="dummyDiv"><div class ="submission"><button class ="loginButton" onclick="loginPage()"> Login </button><button class ="signupButton" id="test" onclick="signupPage()"> Signup </button></div></div>';
		$(".main_body").append(portal_page);
		$(".main_body").css("height", "auto");
		$(".image").width($(window).width());

  		cancelWait();

    	alert("Please wait for confirmation email. An email will be sent to the email you registered within a few days. You will not be able to login until then.");

    	pageCounter = 0;
  	}
	});
}