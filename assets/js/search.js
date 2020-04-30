//var ireland = (lat: 53.1424, lon: 7.6921)
//var italy = (lat: 41.8719, lon: 12.5674)
//var portugal = (lat: 39.3999, lon: 8.2245)
//var switzerland = (lat: 46.8182, lon: 8.2275)
//var spain = (lat: 40.4637, lon: 3.7492)


function search(event){
    
    var choosenCountry = $("#country").val();
    if (!choosenCountry){
        $("#data").html(`<p>Please select a country.</p>`);
        return;
    };
    $.when.call(getData).then(
        function(response) {
            var userData = response;
            $("#data").html(writeToDocument(data));
        },
        function(errorResponse) {
            if (errorResponse.status === 404) {
                $("#data").html(
                    `<h2>No info found for country</h2>`);
            } else {
                console.log(errorResponse);
                $("data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}

    function getData(id,cb){

        var xhr = new XMLHttpRequest();

        xhr.open("GET", "https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=5&key=200735964-55871b76fd696d0af0539bd9bc3b2dd6");
        xhr.send();

        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
              cb(JSON.parse(this.responseText));
        }};
    }

    function getTableHeaders(obj){
        var tableHeaders = [];
        Object.keys(obj).forEach(function(key){
            tableHeaders.push(`<td>${key}</td>`);
        });
        return `<tr>${tableHeaders}</tr>`;
    }


    function writeToDocument(id){
        var tableRows = [];
        var el = document.getElementById("data");
        el.innerHTML = "";

            getData(id, function(data){
                data = data.trails;
                var tableHeaders = getTableHeaders(data[0]);

                data.forEach(function(item) {
                    var dataRow = [];

                    Object.keys(item).forEach(function(key){

                        dataRow.push(`<td>${item[key]}</td>`);
                    });
                    tableRows.push(`<tr>${dataRow}</tr>`);
                });
                el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
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
        }};
    }
//End of Google Code