function createMapMarker() {
    // TODO: add your own access token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.1246,11.0254],
      zoom: 12,
    });
  
  
  
  
    // TODO: add a marker to the map
    var marker = new mapboxgl.Marker()
    .setLngLat([77.1246,11.0254])
    .addTo(map);
  }
  window.onload = () => {
    createMapMarker();
  };  