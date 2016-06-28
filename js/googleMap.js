/* Google Maps */

(function($) {
    "use strict";

	function initialize() {
    	var myCenter = new google.maps.LatLng(39.7645187,-104.9951951);
    	var mapProp = {
        	center : myCenter,
        	zoom : 13,
        	mapTypeId : google.maps.MapTypeId.ROADMAP,
        	scrollwheel: false,
			draggable: !("ontouchend" in document),
    	};
    	var map = new google.maps.Map(document.getElementById("mapSection"), mapProp);
    	var marker = new google.maps.Marker({
        	position : myCenter,
        	icon : 'img/map_marker.png'
    	});
    	marker.setMap(map);
	}

	if($('#mapSection').length) {
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	/* Google Contact Page Map */
	function initializeContact() {
    	var myCenter = new google.maps.LatLng(39.7645187,-104.9951951);
    	var mapProp = {
        	center : myCenter,
        	zoom : 15,
        	mapTypeId : google.maps.MapTypeId.ROADMAP,
        	scrollwheel: false,
			draggable: !("ontouchend" in document),
        	styles: [
            	{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
	    };
    	var map = new google.maps.Map(document.getElementById("mapContact"), mapProp);
    	var marker = new google.maps.Marker({
        	position : myCenter,
        	icon : 'img/map_marker.png'
    	});
    	marker.setMap(map);
	}
	if($('#mapContact').length) {
    	google.maps.event.addDomListener(window, 'load', initializeContact);
	}

})(jQuery);
