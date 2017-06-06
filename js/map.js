function initMap() {
  var uluru = {lat: 45.630302, lng: 9.762596};
  var map = new google.maps.Map(document.getElementById('map'), {
    gestureHandling: "none",
    zoom: 12,
    center: uluru,
    scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
