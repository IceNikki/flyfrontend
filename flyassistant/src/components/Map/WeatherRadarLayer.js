import React, { useEffect } from 'react';
import L from 'leaflet';

const WeatherRadarLayer = ({ map, visible }) => {
  useEffect(() => {
    let weatherLayer;

    if (visible && map) {
      const API_KEY = '5f03a196edd6a06f5f82036c74426538'; // Replace with your API key
      const RADAR_TILE_URL = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`;

      weatherLayer = L.tileLayer(RADAR_TILE_URL, {}).addTo(map);
      
      return () => {
        // cleanup: remove the layer from the map
        if (weatherLayer) {
          map.removeLayer(weatherLayer);
        }
      };
    }
  }, [visible, map]);

  return null;
};

export default WeatherRadarLayer;
