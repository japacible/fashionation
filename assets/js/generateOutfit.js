var selected = {"top" : [], 
				"bottom" : [],
				"shoe" : []
			   };

var weather = "";

$(document).ready(function() {
	$(".main-content-2").hide();
	weather = 0; // getWeatherCode(); When jen's stuff is done!! 
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=tops", populateShirts);
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=bottoms", populatePants);
	$.get("http://pingyang.me/fashionation/api/gettable.php?table=shoes", populateShoes);
	$("#generate").click(generateOutfit);
	$("#random").click(randomOutfit);
});

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
		element.click(highlight);

		var img = $("<img>");
		img.attr("src", "assets/img/icons/clothing/" + id + ".jpg");

		element.append(img);
		var parent = "#" + string + "s";
		$(parent).append(element);
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
			alert("Please select up to 2 shirts, and only one pair of pants and one set of shoes.");
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

	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=" + top1_id + "&top2=" + top2_id + 
			"&bottom=" + bottom_id + "&shoe=" + shoe_id + "&weather=" + weather, displayOutfit);
}

function randomOutfit() {
	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=&top2=&bottom=&shoe=&weather=" + weather, displayOutfit);
}

function displayOutfit(generatedOutfit) {
	generatedOutfit =  $.parseJSON(generatedOutfit);

	$(".main-content").hide();
	$(".extra-content").hide();
	$(".main-content-2").show();

	// fill in images with selections
	var holdAllTheImages = $("<div>");

	var concat = generatedOutfit["top1"] + generatedOutfit["top2"] + generatedOutfit["bottom"] + generatedOutfit["shoe"];
	var concatDiv = $("<div>");
	var concatImg = $("<img>");
	concatDiv.addClass("generated-outfit-image");
	concatImg.attr("src", concat);
	concatDiv.append(concatImg);
	holdAllTheImages.append(concatDiv);

	holdAllTheImages = addToMainDiv(holdAllTheImages, "top1", generatedOutfit);
	if(generatedOutfit["top2"]) {
		holdAllTheImages = addToMainDiv(holdAllTheImages, "top2", generatedOutfit);
	} 
	holdAllTheImages = addToMainDiv(holdAllTheImages, "bottom", generatedOutfit);
	holdAllTheImages = addToMainDiv(holdAllTheImages, "shoe", generatedOutfit);

	$(".main-content-2").append(holdAllTheImages);
}

function addToMainDiv(mainDiv, string, array) {
	var div = $("<div>");
	var img = $("<img>");
	div.addClass("clothing");
	div.addClass("top");
	div.addClass("large");
	img.attr("src", array[string]);
	div.append(img);
	mainDiv.append(div);
	return mainDiv;
}