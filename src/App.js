import React from 'react';
import logo from './logo.svg';
import './App.css';
import HandleCookies from './handle-cookies';
import CallApi from './call-api';

function App() {
  const name = 'Jef'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {name}!</p>
        <HandleCookies />
        <CallApi />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
