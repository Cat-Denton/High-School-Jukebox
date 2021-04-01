export default class SpotifyService {
  static async getToken() {
    try {
      const response = await fetch ('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
        },
        body: 'grant_type=client_credentials'
      });
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const token = await response.json();
      return token.access_token
    } catch(error) {
      return error.message
    }

  }
  static async getSearch(token) {
    try {
      const response = await fetch('https://api.spotify.com/v1/search?q=year%3A1994&type=track', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer' + token}
      
      });
     if (!response.ok) {
       throw Error(response.statusText)
     }
     return await response.json()  
    } catch(error){
      return error.message
    }
  }
}

