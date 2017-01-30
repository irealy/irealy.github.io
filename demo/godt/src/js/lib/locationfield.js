// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  var options = {
  types: ['address']
    , componentRestrictions: {country: "dk"}
};
  //, componentRestrictions: {country: "dk"}
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
      options);
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  
  var place = autocomplete.getPlace();
  var city;
  var street;
  var streetNumber;
  var postalcode;
  var countryCode;
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
      
       if(addressType==='locality') {
         city = place.address_components[i].long_name;
       }
       else if(addressType==='route'){
         street = place.address_components[i].long_name;
        }
       else if(addressType==='street_number'){
         streetNumber = place.address_components[i].long_name;
      }
      else if(addressType==='postal_code'){
         postalcode = place.address_components[i].long_name;
        }
      else if(addressType==='country'){
        
         countryCode = place.address_components[i].short_name;
        }
    
  }
  
  console.log(street + ((streetNumber)?(' ' + streetNumber):''));
  console.log(postalcode);
  console.log(city);
  console.log(countryCode);
  
  $('#street').val(street);
  $('#postalcode').val(postalcode);
  $('#city').val(city);
  $('#country').val(countryCode);


}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}