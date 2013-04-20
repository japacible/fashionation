var selected = {"top" : [], 
				"bottom" : [],
				"shoe" : []
			   };

var cold = "";

$(document).ready(function() {
	$(".main-content-2").hide();
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=tops", populateShirts);
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=bottoms", populatePants);
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=shoes", populateShoes);
	$("#generate").click(generateOutfit);
	$("#random").click(randomOutfit);
	getWeather();
	setTimeout(populateWeatherStats, 1000);
	setTimeout(populateWeatherStats, 2000);
});

function populateWeatherStats() {
	getWeather();

	code = getWeatherCode();
	var temp = getTemperature();
	var stat = getWeatherStatus();
	var loc = getCity();
	console.log("code");
	console.log(code);
	console.log("temp");
	console.log(temp);
	console.log("stat");
	console.log(stat);
	console.log('loc');
	console.log(loc);
	$("#city").text(loc);
	$("#stat").text(stat);
	$("#temp").text(temp);
}

function populateShirts(shirtObj) {
	shirtObj = $.parseJSON(shirtObj);
	populateLoop("top", shirtObj);
}

function populateShoes(shoeObj) {
	shoeObj = $.parseJSON(shoeObj);
	populateLoop("shoe", shoeObj);
}

function populatePants(pantsObj) {
	pantsObj = $.parseJSON(pantsObj);
	populateLoop("bottom", pantsObj);
}

function populateLoop(string, array) {
	for(var i = 0; i < array.length; i++) {
		var id = array[i]["id"];
		var name = array[i]["name"];

		var element = $("<div>");
		element.addClass(string);
		element.addClass("clothing");
		element.attr("id", id);
		element.attr("alt", name)
		element.click(highlight);
		element.mouseenter(hoverPreview);

		var img = $("<img>");
    if (string == "shoe")
      img.attr("src", "assets/img/aoc_icons/shoes.png");
    else
      img.attr("src", "assets/img/aoc_icons/" + id + ".png");
		img.attr("alt", name);

		element.append(img);
		var parent = "#" + string + "s";
		$(parent).append(element);
		element.append("<p class='icon-description'>" + name + "</p>");
	}
}

function highlight() {
	var item = $(this);
	var type = item.attr("class").split(" ")[0];
	var name = item.attr("id");

	if(item.hasClass("highlight")) {
		// remove highlighting, remove from array
		item.removeClass("highlight");
		selected[type] = jQuery.grep(selected[type], function(value) {
				return value != name;
		});
	} else {
		// add highlighting, check for max items, add to array
		if((type != "top" && selected[type].length == 0) || (type == "top" && selected[type].length < 2)) {
			item.addClass("highlight");
			selected[type].push(name);
		} else {
			//ERROR!
			if(type == "top") {
				// more than two shirt error
				$("#tops-error").css("visibility", "visible");
			setTimeout(function() {
				$("#tops-error").css("visibility", "hidden");
			}, 800);
			} else if (type == "bottom") {
				$("#bottoms-error").css("visibility", "visible");
			setTimeout(function() {
				$("#bottoms-error").css("visibility", "hidden");
			}, 800);
			} else if (type = "shoe") {
				$("#shoes-error").css("visibility", "visible");
			setTimeout(function() {
				$("#shoes-error").css("visibility", "hidden");
			}, 800);
			}
		}
	}
}

function generateOutfit() {
	var top1_id = "";
	var top2_id = "";
	var bottom_id = "";
	var shoe_id = "";

	if(selected["top"][0]) {
		top1_id = selected["top"][0];
	}
	if(selected["top"][1]) {
		top2_id = selected["top"][1];
	}
	if(selected["bottom"][0]) {
		bottom_id = selected["bottom"][0];
	}
	if(selected["shoe"][0]) {
		shoe_id = selected["shoe"][0];
	}
	if(top1_id == ""  && top2_id == "" && bottom_id == "" && shoe_id == "") {
		randomOutfit();
	} else {
		$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=" + top1_id + "&top2=" + top2_id + 
			"&bottom=" + bottom_id + "&shoe=" + shoe_id + "&weather=" + code, displayOutfit);
	}
}

function randomOutfit() {
	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=&top2=&bottom=&shoe=&weather=" + code, displayOutfit2);
}

function displayOutfit2(generatedOutfit) {
	$(".main-content").hide();
	$(".extra-content").hide();
	$(".main-content-2").show();

function concatenateOutfit(generatedOutfit) {
  var concat = "";
  if (generatedOutfit["top1"])
    concat += generatedOutfit["top1"];
  if (generatedOutfit["top2"])
    concat += generatedOutfit["top2"];
  if (generatedOutfit["bottom"])
    concat += generatedOutfit["bottom"];
  if (generatedOutfit["shoe"])
    concat += generatedOutfit["shoe"];

  return concat;
}
	// fill in images with selection
	//var concat =(String) ("" + generatedOutfit["top1"] + "" +  generatedOutfit["top2"] + "" + generatedOutfit["bottom"] + "" + generatedOutfit["shoe"]);
	var image = $("<img>");
	var imageLocation = "assets/img/outfits/" + concatenateOutfit(generatedOutfit) + ".jpg";
  image.attr("src", imageLocation);
	$("#generated-outfit-image").prepend(image);

	addToMainDiv("top1", generatedOutfit);
	if(generatedOutfit["top2"]) {
		holdAllTheImages = addToMainDiv("top2", generatedOutfit);
	} 
	addToMainDiv("bottom", generatedOutfit);
	addToMainDiv("shoe", generatedOutfit);
}

function displayOutfit(generatedOutfit) {
	generatedOutfit =  $.parseJSON(generatedOutfit);
  var index = Math.floor((Math.random()*generatedOutfit.length));
  console.log(generatedOutfit);
	generatedOutfit = generatedOutfit[index];

	$(".main-content").hide();
	$(".extra-content").hide();
	$(".main-content-2").show();

function concatenateOutfit(generatedOutfit) {
  var concat = "";
  if (generatedOutfit["top1"])
    concat += generatedOutfit["top1"];
  if (generatedOutfit["top2"])
    concat += generatedOutfit["top2"];
  if (generatedOutfit["bottom"])
    concat += generatedOutfit["bottom"];
  if (generatedOutfit["shoe"])
    concat += generatedOutfit["shoe"];

  return concat;
}
	// fill in images with selection
	//var concat =(String) ("" + generatedOutfit["top1"] + "" +  generatedOutfit["top2"] + "" + generatedOutfit["bottom"] + "" + generatedOutfit["shoe"]);
	var image = $("<img>");
	var imageLocation = "assets/img/outfits/" + concatenateOutfit(generatedOutfit) + ".jpg";
  image.attr("src", imageLocation);
	$("#generated-outfit-image").prepend(image);

	addToMainDiv("top1", generatedOutfit);
	if(generatedOutfit["top2"]) {
		holdAllTheImages = addToMainDiv("top2", generatedOutfit);
	} 
	addToMainDiv("bottom", generatedOutfit);
	addToMainDiv("shoe", generatedOutfit);
}
function ImageExist(url) {
   var img = new Image();
   img.src = url;
   return img.height != 0;
}

function addToMainDiv(string, array) {
	var result;
	var string2 = string;
	if(string.indexOf("top") >=0) {
		string2 = "top";
	}
	// Look up full name
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=" + string2 + "s&id=" + array[string], function(fullname) {result = populateParagraph(string, array, fullname);});
	return result;
  
}

function populateParagraph(string, array, fullname) {
	var mainDiv = $("#generated-outfit-aoc");
	var div = $("<div>");
	div.addClass("special");
	div.addClass("clothing");
	div.addClass("large");

	var img = $("<img>");

	var paragraph = $("<p>");
	paragraph.text(fullname); 

	if (string == "shoe")
   		img.attr("src", "assets/img/aoc_icons/shoes.png");
 	else
    	img.attr("src", "assets/img/aoc_icons/" + array[string] + ".png");
		div.append(img);
	div.append(paragraph); 
		mainDiv.append(div);
	return mainDiv;
}

function hoverPreview() {
	var id = $(this).attr("id");
	var full = $(this).attr("alt");
	var paragraph = $("#aoc-help");
	var image = $("#aoc-help-image");
	paragraph.html("This is a preview of what <strong>" + full + "</strong> might look like.");
	image.attr("src", "assets/img/aoc_image/" + id + ".jpg");
}

function grabUploadedImages() {
	$.get("http://pingyang.me/fashionation/api/getPhotos.php", displayPulledImages);
}

function displayPulledImages(array) {
	var ul = $("<ul>");
	for(var i = 0; i < array.length; i++) {
		var img = $("<img>");
		img.attr("src", array[i]);
		ul.append(img);
	}
	$(body).append(ul);
}
