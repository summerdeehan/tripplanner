const mapboxgl = require('mapbox-gl');
const {marker} = require('/marker.js');

mapboxgl.accessToken =
  'pk.eyJ1Ijoia2FpdGxpbm1haWVyIiwiYSI6ImNqbWk1ZTJpYzAxZnczdm9jcjQ2NzM3ZjUifQ.qfrLHbgoRMtx_D86btE6Xg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

let mark = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);