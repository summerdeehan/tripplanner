const mapbox = require("mapbox-gl");

const newMarker = (type, coords) => {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (type = "Activity") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"; 
    }
    else if (type = "Hotel") {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"; 
    }
    else {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"; 
    }
    new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
}



module.exports = {newMarker};