$(document).ready(function(){
	$('#sideNav a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

  $('#topNav a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
    $('#myNavbar').collapse('toggle')
	});

  var a = function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  a();
});
