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

   searchDestinyPlayer( name ) {
      return this.axiosClient.get(`/Destiny2/SearchDestinyPlayer/1/${name}/`);
   }

   getProfile( destinyMembershipId, membershipType) {
      return this.axiosClient.get(`/Destiny2/${membershipType}/Profile/${destinyMembershipId}?components=100`)
   }

}

exports.DestinyService = DestinyService;