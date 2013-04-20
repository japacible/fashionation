var selected = {"top" : [], 
				"bottom" : [],
				"shoe" : []
			   };

$(document).ready(function() {
	$(".main-content-2").hide();
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
		img.attr("src", "assets/img/icons/clothing/" + id);

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
	console.log(selected);
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
			"&bottom=" + bottom_id + "&shoe=" + shoe_id, displayOutfit);
}

function randomOutfit() {
	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=&top2=&bottom=&shoe=", displayOutfit);
}

function displayOutfit() {
	alert("here");
	$(".mainContent").hide();
	$("..main-content-2").show();
}