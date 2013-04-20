function useGeolocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
}

function onGeolocationError(error) {
	alert("Geolocation error - code: " + error.code + " message : " + error.message);
}

function getWeatherCode() {
	if(Modernizr.geolocation) {
			navigator.geolocation.getCurrentPosition(useGeolocation, onGeolocationError);

		$.ajax({
		  url : "http://api.wunderground.com/api/9dfc726c463f0923/geolookup/conditions/q/47.6172938,-122.32990470000001.json",
		  dataType : "jsonp",
		  success : function(parsed_json) {
			  var location = parsed_json['location']['city'];
			  var temp_f = parsed_json['current_observation']['temp_f'];
			  var icon = parsed_json['current_observation']['icon'];

			  var niceWeatherIcons=["clear","cloudy","mostlycloudy","mostlysunny","partlycloudy","partlysunny", "sunny","unknown"];
			  var rainWeatherIcons=["chancerain","chancestorms","fog","hazy","rain","tstorms","cloudy"];
			  var badWeatherIcons=["chanceflurries","chancesleet","chancesnow","flurries","sleet", "snow"];

			  if ($.inArray(icon, badWeatherIcons) > -1) {
			  	return 2;
			  } else if ($.inArray(icon, rainWeatherIcons) > -1) {
			  	return 1;
			  } else {
			  	return 0;
			  }
			}
		});
	} else {
		return 0;
	}
}