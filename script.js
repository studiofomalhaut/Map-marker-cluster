
//define global scope variables
var locations, map, markers, markerCluster, pin, options;

locations = [
    {lat: 52.38032699999999, lng: 4.882086999999999},
    {lat: 52.3660159, lng: 4.8817284},
    {lat: 52.37427520000001, lng: 4.881664199999999},
    {lat: 52.3696935, lng: 4.8802742},
    {lat: 52.3735012, lng: 4.8781571},
    {lat: 52.38111900000001, lng: 4.886587},
    {lat: 52.3706667, lng: 4.876434499999999},
    {lat: 52.3795392, lng: 4.8809881},
    {lat: 52.3712385, lng: 4.879718599999999},
    {lat: 52.3747087, lng: 4.8779446},
    {lat: 52.3656466, lng: 4.8794435},
    {lat: 52.3681444, lng: 4.879557},
    {lat: 52.373375, lng: 4.88127},
    {lat: 52.3705597, lng: 4.8806408}
  ];

//Call Geocode
// geocode();

// function geocode(){
//     location = "Goudsbloemstraat 165 Amsterdam Netherlands";
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//         params:{address: location, key: 'AIzaSyB6kJAR_MLuTQULIGE5B7sVhBeWoX-7lgw'}
//     }).then(function(response){
//         console.log(response); 

//     }).catch(function(error){
//         console.log(error);
//     });
// }


//Google Map


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 52.372369, lng: 4.897964},
    });

    // Add some markers to the map.
    pin = document.createElement('img');
    pin.src = "img/pin.png"

    markers = locations.map(function(locations) { 
        return new google.maps.Marker({
            position: locations,
            icon: pin
          });
     });

    markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

option = document.querySelectorAll('option');
document.querySelector('button').addEventListener('click', function(e){
  if (options.value === "Jordaan"){
      for (var i=0; i<locations.length; i++){
        return new google.maps.Marker({
                position: locations[i],
                icon: pin,
                 map: map
              }); 
            }
  }
    e.preventDefault();
}); 


            
// Note: The code uses the JavaScript Array.prototype.map() method to
// create an array of markers based on a given "locations" array.
// The map() method here has nothing to do with the Google Maps API.




