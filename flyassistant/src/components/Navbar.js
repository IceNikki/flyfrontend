import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';

function Navbar({ setActiveComponent }) {
  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'var(--color-navbar)' }}>
      {/* ... Your navbar content ... */}
      <ul className="navbar-nav ms-auto" style={{ width: "100%", display: "flex", justifyContent: "space-between"}}>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavItemClick('map')} href="#">Home Map</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavItemClick('cockpit')} href="#">Cockpit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavItemClick('chat')} href="#">Chat with Panda</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavItemClick('settings')} href="#">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => handleNavItemClick('profile')} href="#">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
