
function initMap() {
  //initialize map
  var sf = {lat: 37.7598334, lng: -122.4441808};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: sf
  });
  
  var places = [];
 
  $.get(loc_records, function(data) {
    var letter = "A";
    console.log(data.records);
    $(data.records).each(function(i, loc){  
      //add latitude/longitude to locations
      places[i] = {lat: parseFloat(loc.fields["Latitude"]), lng: parseFloat(loc.fields["Longitude"])};
      
      //Append header letters per each section, 0th , i'th , and final element
      if(i === 0) {
        letter =  data.records[0].fields["Name"][0].toUpperCase();
        $(".locations").append("<h1 class=\"letter\">" + letter + "</h1>");
      }
      
      if(loc.fields["Name"][0].toUpperCase() === letter && i > 0) {
         if(letter !== data.records[i-1].fields["Name"][0].toUpperCase()) {
          $(".locations").append("<h1 class=\"letter\">" + letter + "</h1>");
        }
        
  		  if(data.records[i+1]) {
  		    letter = data.records[i+1].fields["Name"][0].toUpperCase();
  		  }
  	  }
  	  
  	  //setup each location
  	  var html = "<div class=\"labels\" onclick=\"location.href='detail.html?id=" + loc.id + "';\" style=\"cursor: pointer;\">";
  	  html += `<li class="description">${loc.fields["Name"]} <br>Location: ${loc.fields["Neighborhood"]}</li>`;
  	  //html += "<img src=\"" + loc.fields["Picture of Landmark"]["0"].url + "\" width=\"auto\" height=\"400\" alt=\"picture\">";
  	  html += "</div>";
  	  $(".locations").append(html);
  	
      //draw markers onto map
      var marker = new google.maps.Marker({
        position: places[i],
        map: map
      });
      
      //Draw labels onto markers
      infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent("<a href=\"detail.html?id=" + loc.id + "\">" + loc.fields["Name"] + "</a>");
          infowindow.open(map, this);
        });
    }); 	 
  });
};
