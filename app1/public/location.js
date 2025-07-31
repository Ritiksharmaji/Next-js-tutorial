
console.log("Location script loaded");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
console.log(position);
    // const lat = position.coords.latitude;
    // const long = position.coords.longitude;
    // const mapLink = `https://www.google.com/maps/@${lat},${long},15z`;
    // document.getElementById("map").innerHTML = `<a href="${mapLink}" target="_blank">View on Google Maps</a>`;
}

function error() {
  alert("Sorry, no position available.");
}

getLocation();