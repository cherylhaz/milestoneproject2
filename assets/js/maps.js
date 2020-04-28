

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });
    };

    function getData(cb){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200735964-55871b76fd696d0af0539bd9bc3b2dd6");
        xhr.send();
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                cb(JSON.parse(this.responseText));
            }}};
    
            getData (function(data){
                console.log(data);
            });
            
//Code used from Google Tutorial - https://developers.google.com/maps/documentation/javascript/importing_data
      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }}

//End of Google Code