var express = require('express');
var router = express.Router();
const inspect = require('util').inspect;
const destinyService = require('../services/destiny-service');
const destinyClient = new destinyService.DestinyService();


router.get('/', function(req, res, next) {
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

router.get('/search/:name', function(req, res, next) {
   destinyClient.searchDestinyPlayer(req.params.name)
   .then((response)=>{
      console.log(response.data.Response)
      res.json(response.data.Response);
   })
   .catch((error) => {
      console.log(error);
      res.send('There was an error')
   })
   .finally(() => {
   })
});

module.exports = router;