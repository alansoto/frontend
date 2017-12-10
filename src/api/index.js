const baseUrl = 'http://localhost:3001'


function getPosts(){
  return fetch(`${baseUrl}/posts`, {
    method: 'GET',
    headers:{'Authorization':'whatever'}
  })
  .then(response => response.json())
  .then(data => {return data}
  )

}

export {getPosts};
