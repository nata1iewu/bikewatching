import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
console.log('Mapbox GL JS Loaded:', mapboxgl);
map.on('load', async () => {
  map.addSource('boston_route', {
    type: 'geojson',
    data: 'https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::existing-bike-network-2022.geojson',
  });
  map.addSource('cambridge_route', {
  type: 'geojson',
  data: 'https://raw.githubusercontent.com/cambridgegis/cambridgegis_data/main/Recreation/Bike_Facilities/RECREATION_BikeFacilities.geojson',
});

  map.addLayer({
    id: 'bike-lanes',
    type: 'line',
    source: 'boston_route',
    paint: {
  'line-color': '#32D400',
  'line-width': 5,
  'line-opacity': 0.6,
},
  });
});
map.addLayer({
  id: 'cambridge-bike-lanes',
  type: 'line',
  source: 'cambridge_route',
  paint: {
    'line-color': '#32D400',
    'line-width': 5,
    'line-opacity': 0.6,
  },
});
