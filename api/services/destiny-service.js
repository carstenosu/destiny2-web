const axios = require('axios').default;

class DestinyService {

   constructor( ) {
      this.axiosClient = axios.create({
         baseURL: 'https://www.bungie.net/Platform',
         timeout: 5000,
         headers: {'X-API-Key': process.env.DESTINY_API_KEY}
      })
   }

   getManifest() {
      return this.axiosClient.get('/Destiny2/Manifest/');
   }

   searchDestinyPlayer() {
      return this.axiosClient.get('/Destiny2/SearchDestinyPlayer/1/carsten/');
   }

   getProfile( destinyMembershipId, membershipType) {
      return this.axiosClient.get('/Destiny2/1/Profile/4611686018429730113?components=100')
   }

}

exports.DestinyService = DestinyService;