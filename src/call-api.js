import React from 'react'

function CallApi() {
  console.log('this is CallApi')
  
  const APIData = "http://lvh.me:8000/data"

  async function getData(url){
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Cookie': '_rails-auth_session=QmZxYjhpOUhWbUY0dnFCKzlwTFFKckVzVy9EeUUxTENDVlFOVU5SNUw2VVpHU1RLS2dYeXFPWW9nNzVUL1E4VDdBRzR5RWttanBqaXhhc2ZqOGgvaEwzUlZ0ZGdWVlhwUkw5K3VDc09pdzFvWEE3bmNpenc4ZnYwSUR6a3hIWnR3L1NzRUIxNWE2S1dYV3d2Lzc2NVdId1JvcG5TQmZ3TlE2YXVYVzA2L2tEOE52NS9DaU5CR3paVHRQUFFpRWhtcyt3UGpqemdVYTNqc3NpeWZ3RjM3dlFJR3U1dmVCUDV3UjE4azNWc1VEaGN1bTJXd0o4TUFaVHVYaWxiNFh1OS0tdG1KdWw0clR6ZGExNzZkSFV1TDVydz09--10288da03971bf56be66d7c62db666cddef9f345'
      }
    })
    return response.json()
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