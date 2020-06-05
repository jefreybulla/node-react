import React from 'react'

function CallApi() {
  console.log('this is CallApi')
  
  const APIData = "https://s1.ngrok.io/data"

  async function getData(url){
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
    return response.json()
  }
  
  getData(APIData)
    .then(data => {
      console.log(data)
    })

  return (
    <div>
      <p>Then I send the encrypted cookie on every API request to validate the session. I only get a response if the session is valid.</p>
    </div>
  );
}

export default CallApi;