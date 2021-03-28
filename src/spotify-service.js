export default class SpotifyService {
  static async getToken() {
    try {
      const token = await fetch ('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded', 
            'Authorization' : 'Basic ' + btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
        },
        body: 'grant_type=client_credentials'
      });
      console.log(token)
      if (!token.ok) {
        throw Error(token.statusText)
      }
      return token.json();
    } catch(error) {
      return error.message
    }

  }
  static async getSearch(token) {
    try {
      const result = await fetch('https://api.spotify.com/v1/search?q=year%3A1994&type=track', {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer' + token}
      
      });
     if (!result) {
       throw Error(result.statusText)
     }
     return result.json()  
    } catch(error){
      return error.message
    }
  }
}

