
      function initMap() {
        var uluru = {lat: 43.141396, lng: 20.513217};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
   