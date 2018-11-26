document.addEventListener('keypress', function (e) {
  if (13 == e.keyCode) {
    var postcode_1 = String(document.getElementById("postcode_1").value);
    var postcode_2 = String(document.getElementById("postcode_2").value);
    console.log(postcode_1);
    console.log(postcode_2);
    getDistanceMiles(postcode_1, postcode_2);

  }
});

function getDistanceMiles(postcode_1, postcode_2) {
  const service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
      origins: [postcode_1],
      destinations: [postcode_2],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL
  }, callback);
}

function callback(response, status) {
  console.log(response);
  var distance = response.rows[0].elements[0].distance.text;
  var duration = response.rows[0].elements[0].duration.text;
  var listItem = document.createElement("li");
  listItem.className = "list";
  container.appendChild(listItem);
  listItem.innerHTML = distance + " </br> " + duration 
  console.log(distance);
  console.log(duration);
}
