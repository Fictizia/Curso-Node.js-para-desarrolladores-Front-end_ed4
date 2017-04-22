var https = require('https');

if (process.argv[2] && process.argv[3]) {
  var minMag = parseInt(process.argv[2]);
  var maxMag = parseInt(process.argv[3]);
  var earthUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=' + minMag + '&maxmagnitude=' + maxMag + '&limit=5';
  (minMag != NaN && minMag >= 0 && maxMag != NaN && maxMag >= 0) ? getEarthquakes(earthUrl) : process.exit(9);
}

function getEarthquakes(url) {
  https.get(url, function(res){
      var body = '';
      res.on('data', function(data){
          body += data;
      });
      res.on('end', function(){
          var earthquakes = JSON.parse(body);
          console.log('metadata -> ', earthquakes.metadata);
          earthquakes.features.forEach(function(earthquake) {
            console.log('********************************************');
            console.log('********************************************');
            console.log('********************************************');
            console.log(earthquakes.metadata.title);
            console.log('--------------------------------------------');
            console.log('Total: ', earthquakes.metadata.count);
            console.log('Status: ', earthquakes.metadata.status);
            console.log('--------------------------------------------');
            console.log(new Date(earthquake.properties.time).toUTCString());
            console.log('============================================');
            console.log(earthquake.properties.place);
            console.log('Magnitud: ', earthquake.properties.mag);
            console.log('Estatus: ', earthquake.properties.status);
            console.log('Tipo: ', earthquake.properties.type);
            console.log('Lugar', earthquake.properties.place);
            console.log('Coordenadas: ', earthquake.geometry.coordinates[0], ', ', earthquake.geometry.coordinates[1]);

          });
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
  });
}
