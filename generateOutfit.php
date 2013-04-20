<?php include "template.php"; 
	top();
?>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script>
	$(document).ready(function() {
		alert("ready");
		var shirts = $.get("http://pingyang.me/fashionation/api/gettable.php?table=tops", populateShirts);
		var pants = $.get("http://pingyang.me/fashionation/api/gettable.php?table=bottom", populatePants);
		var shoes = $.get("http://pingyang.me/fashionation/api/gettable.php?table=shoes", populateShoes);
	});

	function populateShirts(shirtObj) {
		shirtObj = $.parseJSON(shirtObj);
		console.log(shirtObj);
		console.log("shirt array size: " + shirtObj.length);
		for(var i = 0; i < shirtObj.length; i++) {
			var id = shirtObj[i]["id"];
			var name = shirtObj[i]["name"];

			var element = $("<div>");
			element.addClass("top");
			element.attr("id", id);

			var img = $("<img>");
			img.attr("src", "assets/img/icons/clothing/" + id);

			element.append(img);
			$("#tops").append(element);
		}
	}

	function populateShoes(shoeObjs) {

	}

	function populatePants(pantObj) {

	}
</script>
<div class="row-fluid" id="tops">
	tops</br>
</div>


<?php bottom(); ?>