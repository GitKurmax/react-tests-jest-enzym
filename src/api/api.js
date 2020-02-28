export const apiCall = (link) =>
  fetch(link).then(response => {
    if(response.status === 404) {
      console.log(response.status)
      throw new Error("error")
    }
    return response.json()
  })