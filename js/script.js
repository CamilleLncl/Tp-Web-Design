(function(){
	angular.module("store",[]);
})();




(function(){	
	angular.module("store")
	.controller("storeController",["$http",function($http){
		var _this=this;
		this.list=[];
		
		$http.get("./data/data.json")
			.success(function(data){
				console.log(data);
				_this.list=data;
			});
			
		this.order_by="";
	
		this.tri=function(ref_order){console.log('-tri-',ref_order);
			if(_this.order_by===ref_order)
				_this.order_by="-"+ref_order;
			else _this.order_by=ref_order;
			
		};
	
	}])
})();

(function(){
	angular.module("store");
	
	
	
	var _this=this;
})();
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
          'circle-color': '#fbb03b'
      } }, 'waterway-label'); 

     map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['cafes'] });

  var feature = features[0];

  // Populate the popup and set its coordinates
  // based on the feature found
  var popup = new mapboxgl.Popup()
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
  	 '</br><b> NOM </b>: ' + feature.properties.fields.nom_du_cafe +
  '<b> ADRESSE </b>: ' + feature.properties.fields.adresse + 
  '</br><b> ARRONDISSEMENT </b>: ' + feature.properties.fields.arrondissement +
 
  '</br><b> PRIX</b>: ' + feature.properties.fields.prix_comptoir )
  .addTo(map);
});

     map.on('mousemove', function(e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['cafes'] });
  map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});
   });

