import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import Cockpit from './components/Cockpit'; // Import your other components
import Chat from './components/ChatPanda';
import Settings from './components/Settings';
import Profile from './components/Profile';

function App() {
  const [activeComponent, setActiveComponent] = useState('map'); // Default to 'map'

  const renderComponent = () => {
    switch (activeComponent) {
      case 'map':
        return <Map />;
      case 'cockpit':
        return <Cockpit />;
      case 'chat':
        return <Chat />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <Profile />;
      default:
        return <Map />;
    }
  };

  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>us</p>
      </header>
    </div>
  );
}

export default App;

