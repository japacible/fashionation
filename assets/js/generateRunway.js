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
	if($("#SuccessMessageUpload")) {
		setTimeout(hideErrorMessage, 2000);
		//$("#SuccessMessageUpload").click(hideErrorMessage);
	}
});

function hideErrorMessage() {
	$("#SuccessMessageUpload").hide();
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

	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=" + top1_id + "&top2=" + top2_id + 
			"&bottom=" + bottom_id + "&shoe=" + shoe_id , displayOutfit);
}

function randomOutfit() {
	$.get("http://pingyang.me/fashionation/api/getoutfits.php?top1=&top2=&bottom=&shoe=", displayOutfit);
}

function displayOutfit(generatedOutfit) {
	generatedOutfit =  $.parseJSON(generatedOutfit);
	var index = Math.floor(Math.random() * generatedOutfit.length);
	generatedOutfit = generatedOutfit[index];

	$(".main-content").hide();
	$(".extra-content").hide();
	$(".main-content-2").show();

	// fill in images with selections
	var holdAllTheImages = $("#generated-outfit-aoc");
	var concat =(String) ("" + generatedOutfit["top1"] + "" +  generatedOutfit["top2"] + "" + generatedOutfit["bottom"] + "" + generatedOutfit["shoe"]);
	var image = $("<img>");
	image.attr("src", concat + ".jpg");
	$("#generated-outfit-image").prepend(image);

	holdAllTheImages = addToMainDiv(holdAllTheImages, "top1", generatedOutfit);
	if(generatedOutfit["top2"]) {
		holdAllTheImages = addToMainDiv(holdAllTheImages, "top2", generatedOutfit);
	} 
	holdAllTheImages = addToMainDiv(holdAllTheImages, "bottom", generatedOutfit);
	holdAllTheImages = addToMainDiv(holdAllTheImages, "shoe", generatedOutfit);
}

function addToMainDiv(mainDiv, string, array) {
	var img = $("<img>");
	var div = $("<div>");
	div.addClass("clothing");
	div.addClass("large");
	img.attr("src", array[string]);
	div.append(img);
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
