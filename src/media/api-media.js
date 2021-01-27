
const listPopular = async (signal) => {
  try {
    let response = await fetch('/api/media/popular', {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const read = async (params, signal) => {
  try {
    let response = await fetch('/api/media/' + params.mediaId, {
      method: 'GET',
      signal: signal
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}


module.exports= {
  listPopular,
  read
}