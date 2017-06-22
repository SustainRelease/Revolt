function myMap() {
  var myLatLng = {lat: 48.873928, lng: 2.342600};

  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Revolt'
  });
}
