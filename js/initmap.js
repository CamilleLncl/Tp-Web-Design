map.on('load', function () {

	 map.addSource('mapCafe', {
          type: 'geojson',
          data: './data/mapCafe.geojson',
          buffer: 0,
          maxzoom: 12
    });


     map.addLayer({
        'id': 'cafes',
          'type': 'circle',
          'source': 'mapCafe',
        'paint': {
          'circle-color': '#BF283C'
      } }, 'waterway-label'); 
 

     map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['cafes'] });

  var feature = features[0];

  // Populate the popup and set its coordinates
  // based on the feature found
  var popup = new mapboxgl.Popup()
  .setLngLat(feature.geometry.coordinates).addTo(map)
  .setHTML(
  '</br><b> NOM </b>: ' + feature.properties.nom_du_cafe +
  '<b> ADRESSE </b>: ' + feature.properties.adresse + 
  '</br><b> ARRONDISSEMENT </b>: ' + feature.properties.arrondissement +
 
  '</br><b> PRIX</b>: ' + feature.properties.prix_comptoir )
  .addTo(map);
});

     map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['cafes'] });
  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});
   });
