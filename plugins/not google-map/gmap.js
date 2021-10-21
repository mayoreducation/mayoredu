window.marker = null;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 27.7045741, lng: 85.3203669 },
    zoom: 8,
  });
}
var map = document.getElementById('map_canvas');
if (map != null) {
  google.maps.event.addDomListener(window, 'load', initialize);
}
