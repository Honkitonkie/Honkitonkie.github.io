var api = '&key=AIzaSyBdmhE0BeIZeqh1ze_2MlkxIaE4j5dXYZM';
var google = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
var query = 'units=kilometers&origins=document.getElementById("x"),DC&destinations=document.getElementById("plaats"),NL';

var url = google+query+api;

document.getElementById("test").innerHTML = url;