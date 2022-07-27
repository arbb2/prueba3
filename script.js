
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 30,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.994682,-71.335775],
    zoom: 18,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 4,
					
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 1.2,
					'dashArray': 0.7,
                    'opacity': 1.8,
					'fillOpacity': 0.23
                };	

				
var style3 = {
                    'color': "red",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.5
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.5
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  

		

   /* var nod_antofa = L.geoJSON(nod_antofa, {
	style:function(feature) {
        switch (feature.properties.nsn) {
            case '148_1': return {color: "#FFFF00"};
            case '23_3':   return {color: "#00FF00"};
			case '148_4':   return {color: "#FFFFFF"};
			case '148_2':   return {color: "#FFFFFF"};
			case '23_4':   return {color: "#FFFFFF"};
        }
    } ,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.nsn);
    }
	
    }).addTo(map);				
			  */                 
	
		  //-71.3427126869,-29.9959060140
		  //-71.3347619,-29.9992163
		  
		  
	var cont3= L.geoJSON(cont3, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);  
	  

var proy_buenretiro_a;  
	
	proy_buenretiro_a = L.imageOverlay('collage_2707_modificado_png.png', [[-29.99139037,-71.33877726],[-29.99998118,-71.33229577]],{opacity:1}).addTo(map);




		 


	var gr2= L.geoJSON(gr2, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);  


var gr1= L.geoJSON(gr1, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);



var gr3= L.geoJSON(gr3, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);

var gr4= L.geoJSON(gr4, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);

var gr7= L.geoJSON(gr7, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);

var gr6b= L.geoJSON(gr6b, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);

var gr5= L.geoJSON(gr5, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);












/*
	var b_ = L.geoJSON(b_, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


			  
	var c_ = L.geoJSON(c_, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
	
	var d_ = L.geoJSON(d_, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);		  

	var e_ = L.geoJSON(e_, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
	var d_ = L.geoJSON(d_, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var e_ = L.geoJSON(e_, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

	var f_ = L.geoJSON(f_, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var g_ = L.geoJSON(g_, {
	style: style10,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


  	var h_ = L.geoJSON(h_, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
  
	var i_ = L.geoJSON(i_, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map); 
			  
	var j_ = L.geoJSON(j_, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);			  

	




*/









			  
/*			  
			  
var imageUrl = 'nod177b.png',
    imageBounds = [[-29.978475, -71.338548], [-29.985505, -71.332666]],
	opacity=;
L.imageOverlay(imageUrl, imageBounds,opacity).addTo(map);  
 
 
 
 
*/






/*var	bounds = new L.LatLngBounds(
			new L.LatLng(-30.579153, -71.203989),
			new L.LatLng(-30.593552, -71.169173));

		map.fitBounds(bounds);

		var overlay = new L.ImageOverlay("nods_png.png", bounds, {
			opacity: 0.5,
			
			
		})//.addTo(map);


    var baseMaps = {
    "mapa base": mapbox,
   };

   var overlayMaps = {
	 
	"Nodo 9": a_,
	"Nodo 10": b_,  
    "Nodo 11": c_,
	"Nodo 12": d_,
    "Nodo 13": e_,
	"Nodo 14": f_,
    "Nodo 15": g_,
	"Nodo 16": h_,
    "Nodo 17": i_,
	"Nodo 18": j_,
    
	"Direcciones": overlay
   };

   var raster = {
	   
	 "Imagen nodos" : overlay
	   
   };
*/


/*
var layerControl = new L.Control.Layers(null, {
    'Group 1': layerGroup1
    
}).addTo(map);
*/
//L.control.layers(baseMaps, overlayMaps).addTo(map);


 L.control.Legend({
     position: "bottomleft",
            collapsed: false,
            symbolWidth: 24,
            opacity: 1,
            column: 2,
            legends: [{
                label: "cable",
                type: "image",
                url: "cable.png",
    }, {
                label: "telefono",
                type: "image",
                url: "telefono.png"
            }, {
                label: "internet",
                type: "image",
                url: "internet.png"
            }, {
                label: "premium",
                type: "image",
                url: "premium.png"
            }, {
                label: "sin servicio",
                type: "image",
                url: "sin servicio.png"
            }]
}).addTo(map);







// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc=  L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
