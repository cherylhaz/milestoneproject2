  
var xhr = new XMLHttpRequest();

function dataCall(){
$.ajax({
    xhrFields: {
        withCredentials: true
    },
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', '200735964-55871b76fd696d0af0539bd9bc3b2dd6');
    },

    url: "https://www.hikingproject.com/data",
    type: "GET",
    data: {
        "url" : 'https://www.hikingproject.com/data'
    }
}).done(function(data){
    console.log(data);
});
};
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 53.594270, lng: -7.061600},
  zoom: 8
});