function initMap() {

    locations=[
        {lat:20.733, lng:-103.452},
        {lat:20.743, lng:-103.452},
    ]

    // for (location in locations){
    //     var myLatLng = locations[location];

  
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 15,
    //     center: myLatLng
    //     });
    
    //     var marker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     title: 'Hello World!'
    //     });
    // }
    
    var myLatLng = {lat: 20.733, lng: -103.452};
    var myLatLng = locations[0];

  
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });
    

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    }); 
    
    for(i=0; i<locations.length; i++){
        new google.maps.Marker({
            position: locations[i],
            map: map,
            title: document.getElementById("nombreBache")
            });
    }
    






  }