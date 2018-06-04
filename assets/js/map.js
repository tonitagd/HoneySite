var marker1;
var marker2;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: { lat: 42.9150231, lng: 24.9158065 }
  });
  markerBulgari = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 42.932884, lng: 24.910905 }
  });
  markerDismanitsa = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 42.901565, lng: 24.933088 }
  });
  markerBulgari.addListener('click', function() {
    toggleBounce(markerBulgari);
  });
  markerDismanitsa.addListener('click', function() {
    toggleBounce(markerDismanitsa);
  });
}

function toggleBounce(marker) {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
