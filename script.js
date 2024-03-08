var map = L.map('carte').setView([46.81306108645148, -71.23201514382984], 14);

new L.basemapsSwitcher([
    {
      layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(map), //DEFAULT MAP
      icon: 'images/Capture2.PNG',
      name: 'Fond de carte 1'
    },
    {
      layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }), 
      icon: 'images/Capture1.PNG',
      name: 'Fond de carte 2'
    },
    {
      layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      }),
      icon: 'images/Capture3.PNG',
      name: 'Fond de carte 3'
    },
  ], { position: 'topright' }).addTo(map);

L.control.scale().addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.20601535878706,
          46.81377452799944
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.20549419484698,
          46.81180391310738
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.20272612882954,
          46.81285093561334
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.2073922492899,
          46.80747334390949
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.21416143481339,
          46.80868393779073
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.22005680236089,
          46.80077464330435
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.21700710080532,
          46.801632190803474
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.20660360893893,
          46.81276447273376
        ],
        "type": "Point"
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          -71.22394087619058,
          46.802485171428486
        ],
        "type": "Point"
      }
    }
  ]
};



function createCustomIcon (feature, latlng) {
  let myIcon = L.icon({
    iconUrl: 'images/lieu.png',
    iconSize:     [25, 25], // width and height of the image in pixels
    shadowSize:   [35, 20], // width, height of optional shadow image
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  return L.marker(latlng, { icon: myIcon })
}

let myLayerOptions = {
  pointToLayer: createCustomIcon
}


L.geoJSON(geojsonFeature,myLayerOptions).addTo(map);


const legend = L.control.Legend({
  position: "bottomright",
  collapsed: false,
  symbolWidth: 25,
  symbolHeight:25,
  opacity: 0.8,
  column: 1,
  legends: [{
      label: "Lieux historiques",
      type: "image",
      url: "images/lieu.png",
  }]
})
.addTo(map);
