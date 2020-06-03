

import React from 'react';
import logo from './logo.svg';
import './App.css';

function HandleCookies() {
  console.log('this is handle-cookies')
  
  // Accessing cookies. It does not work for HttpOnly cookies.
  const allCookies = document.cookie
  console.log(`all cookies: ${allCookies}`)
  
  // planting cookies
  // document.cookie = "color=red"
  // document.cookie = "city=Bogota"

  // removing a cookie by expiring it. It does not work got HttpOnly cookies
  // document.cookie = "color=null; max-age=0"

  return (
    <div>
      <p>This is HandleCookies</p>
    </div>
  );
}

export default HandleCookies;