import React from 'react';
import logo from './logo.svg';
import './App.css';
import HandleCookies from './HandleCookies';
import CallApi from './CallApi';

function App() {
  const name = 'stranger'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {name}!</p>
        <HandleCookies />
        <CallApi />
      </header>
    </div>
  );
}

export default App;