import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LayerToggle from './Map/LayerToggle';

class Map extends Component {
  componentDidMount() {
    // create map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  render() {
    return (
      <div style={{ position: 'relative', height: '500px' }}>
        <div id="map" style={{ height: '100%' }} />
        
        <div className="layer-controls">
          <LayerToggle icon="path_to_weather_radar_icon.png" label="Weather Radar" onToggle={this.toggleWeatherRadar} />
          {/* Add other layer toggles similarly */}
        </div>
      </div>
    );
  }
  
}

  

export default Map;
