import React from 'react'

function CallApi() {
  console.log('this is CallApi')
  
  const APIData = "https://s1.ngrok.io/data"

  async function getData(url){
    const response = await fetch(url, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include', // include, *same-origin, omit
    })
    return 10
    // return response.json()
  }
  
  getData(APIData)
    .then(data => {
      console.log(data)
    })

/*
  fetch(APIData, {
    method:"GET",
  })
    .then(response => response.json())
    // .then(data => console.log(`data: ${data}`))
    .then(data => console.log(data.city))
*/

  return (
    <div>
      <p>This is CallApi</p>
    </div>
  );
}

export default CallApi;