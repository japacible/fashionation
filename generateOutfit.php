<?php include "template.php"; 
	top();
?>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script>
	$(document).ready(function() {
		$.get("http://pingyang.me/fashionation/api/gettable.php?table=tops", populateShirts);
		$.get("http://pingyang.me/fashionation/api/gettable.php?table=bottoms", populatePants);
		$.get("http://pingyang.me/fashionation/api/gettable.php?table=shoes", populateShoes);
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

			var img = $("<img>");
			img.attr("src", "assets/img/icons/clothing/" + id);

			element.append(img);
			var parent = "#" + string + "s";
			$(parent).append(element);
		}
	}
</script>
<div id="tops">
	tops<br/>
</div>

<div id="bottoms">
	bottoms<br/>
</div>

<div id="shoes">
	shoes<br/>
</div>

<?php bottom(); ?>