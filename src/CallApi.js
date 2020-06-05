import React from 'react'

function CallApi() {
  console.log('this is CallApi')
  
  // const APIData = "https://rails-auth-2020.herokuapp.com/data"
  const APIData = "https://s1.ngrok.io/data"

  const getData = async (url) => {
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
      <p>This is CallApi</p>
    </div>
  );
}

export default CallApi;