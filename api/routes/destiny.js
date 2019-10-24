var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const inspect = require('util').inspect;
const destinyService = require('../services/destiny-service');
const destinyClient = new destinyService.DestinyService();


router.get('/', function(req, res, next) {
   //destinyClient.getManifest()
   destinyClient.getProfile()
   .then((data)=>{

      console.log(data);

      res.json(inspect(data));
   })
   .catch((error) => {
      console.log(error);
      res.send('There was an error')
   })
   .finally(() => {
   })
});

module.exports = router;