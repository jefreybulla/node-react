
import React from 'react';

function HandleCookies() {
  // console.log('this is handle-cookies')
  
  // Accessing cookies. It does not work for HttpOnly cookies.
  // const allCookies = document.cookie
  // console.log(`all cookies: ${allCookies}`)
  
  // planting cookies
  // document.cookie = "color=red"
  // document.cookie = "city=Bogota"

  // removing a cookie by expiring it. It does not work got HttpOnly cookies
  // document.cookie = "color=null; max-age=0"

  return (
    <div>
      <p>I am a front-end-only React app that uses the session cookie of a friendly Rails app.</p>
      <p>I send the encrypted cookie on every API request to validate the session. I only get data back if the session is valid.</p>
    </div>
  );
}

export default HandleCookies;