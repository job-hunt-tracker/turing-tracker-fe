function fetchData(path: string) {
  // return fetch(`https://turing-tracker-api-23a52cd510ed.herokuapp.com/api/v1/${path}`)
  return fetch(`http://localhost:5000/api/v1/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occured: Status ${response.status}`)
      }
    })
}

export default fetchData;
