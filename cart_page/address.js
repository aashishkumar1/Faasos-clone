var div = document.querySelector(".checkStatus");
var id;
function activate(e) {
  console.log(e.id);
  id = e.id;

  for (var i = 0; i <= 3; i++) {
    var classDiv = document.getElementById(String(i));
    if (classDiv) {
      classDiv.classList.remove("active");
      classDiv.value = "";
    }
  }
  let div = document.getElementById(id);
  div.classList.add("active");
  div.value = div.innerText;
}

// Map
var confirmBtn = document.getElementById("confirmPosition");
var onClickPositionView = document.getElementById("onClickPositionView");
var onIdlePositionView = document.getElementById("onIdlePositionView");

// Initialize locationPicker plugin
var lp = new locationPicker(
  "map",
  {
    setCurrentPosition: true, // You can omit this, defaults to true
  },
  {
    zoom: 15, // You can set any google map options here, zoom defaults to 15
  }
);

// Listen to map idle event, listening to idle event more accurate than listening to ondrag event
google.maps.event.addListener(lp.map, "idle", function (event) {
  // Get current location and show it in HTML
  var location = lp.getMarkerPosition();
  getReverseGeocodingData(location.lat, location.lng);
  let inputLat = document.querySelector("#LATITUDE_ELEMENT_ID");
  let inputLng = document.querySelector("#LONGITUDE_ELEMENT_ID");
  inputLat.value = location.lat;
  inputLng.value = location.lng;
});

async function getReverseGeocodingData(lat, lng) {
  let response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCFqHdww7qwKP8nyQ4MUNFDPAgnfzNbZAU`
  );

  let data = await response.json();
  let town = data.results[0].address_components[2].short_name;
  let address = data.results[3].formatted_address;
  appendAddress(town, address);
}

function appendAddress(town, address) {
  let townEl = document.getElementById("town");
  let addressEl = document.getElementById("address");

  townEl.innerText = town;
  addressEl.innerText = address;
}

function saveAddress() {
  let inputLat = document.querySelector("#LATITUDE_ELEMENT_ID").value;
  let inputLng = document.querySelector("#LONGITUDE_ELEMENT_ID").value;
  let house = document.getElementById("house").value;
  let landmark = document.getElementById("landmark").value;

  if (id == "1") {
    var addressType = "home";
  } else if (id == "2") {
    var addressType = "work";
  } else if (id === "3") {
    var addressType = "others";
  }

  let typedAddress = {
    houseNo: house,
    landmark: landmark,
    addressType: addressType,
  };

  let mapData = {
    lat: inputLat,
    lng: inputLng,
  };

  var addressData = [mapData, typedAddress];

  localStorage.setItem("Address", JSON.stringify(addressData));

  house = "";
  landmark = "";
  document.querySelector(".bg-modal").style.display = "none";
}
document.getElementById("addAddress").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});
document.getElementById("closeMap").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
