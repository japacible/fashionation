var latitude = null;
var longitude = null;
var timer = null;
var weatherResult = null;

function getWeatherCode() {
	getWeather();
	return weatherResult;
}

function useGeolocation(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;

	$("#latitude").html(latitude);
	$("#longitude").html(longitude);
}

function onGeolocationError(error) {
	alert("Geolocation error - code: " + error.code + " message : " + error.message);
}

$(document).ready(function(){
	getWeather();	
});

function getWeather() {
	if(Modernizr.geolocation) {
		$("#geolocation").html("is supported.");
		navigator.geolocation.getCurrentPosition(useGeolocation, onGeolocationError);
		
		// Wait until the lat and long are set. 
		timer = setInterval(checkUpdate, 500);
	} else {
		$("#geolocation").html("is not supported.");
		weatherResult = 0;
	}
}

function checkUpdate() {
	if(latitude && longitude) {
		alert("variables are set!");
		clearInterval(timer);
		timer = null;
		$.ajax({
		  url : "http://api.wunderground.com/api/9dfc726c463f0923/geolookup/conditions/q/47.6172938,-122.32990470000001.json",
		  dataType : "jsonp",
		  success : ajaxSuccess
		});
	}
}

function ajaxSuccess(parsed_json) {
	var location = parsed_json['location']['city'];
	var temp_f = parsed_json['current_observation']['temp_f'];
	var icon = parsed_json['current_observation']['icon'];
	alert("Current temperature in " + location + " is: " + temp_f + " and the icon is: " + icon);

	var niceWeatherIcons=["clear","cloudy","mostlycloudy","mostlysunny","partlycloudy","partlysunny", "sunny","unknown"];
	var rainWeatherIcons=["chancerain","chancestorms","fog","hazy","rain","tstorms","cloudy"];
	var badWeatherIcons=["chanceflurries","chancesleet","chancesnow","flurries","sleet", "snow"];

	if ($.inArray(icon, badWeatherIcons) > -1) {
		alert("bad weather.");
		weatherResult = 2;
	} else if ($.inArray(icon, rainWeatherIcons) > -1) {
		alert("rainy weather.");
		weatherResult = 1;
	} else {
		alert("okay weather.");
		weatherResult = 0;
	}
}