import React from 'react';

const LayerToggle = ({ icon, label, onToggle }) => (
  <div className="layer-toggle" onClick={onToggle}>
    <img src={icon} alt={label} title={label} />
  </div>
);

export default LayerToggle;
