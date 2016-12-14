var airtable_key = "keyjUyqxvapBphwo4";
var gmaps_key = "AIzaSyCO9Bmu58rNIQbqlT0MxdUtkwKM6wCEDEU";

function initMap() {
        var sf = {lat: 37.7729371, lng: -122.422864};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: sf
        });
        
        var marker = new google.maps.Marker({
          position: sf,
          map: map
        });
        
  }
