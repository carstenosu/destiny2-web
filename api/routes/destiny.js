var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const inspect = require('util').inspect;


const instance = axios.create({
   baseURL: 'https://www.bungie.net/Platform',
   timeout: 1000,
   headers: {'X-API-Key': process.env.DESTINY_API_KEY}
});


router.get('/', function(req, res, next) {
   instance.get('/Destiny2/Manifest/')
   .then((data)=>{
      console.log(data);
      //res.send(data);
      res.json(inspect(data));
   })
   .catch((error) => {
      res.send('There was an error')
   })
   .finally(() => {
   })
});

module.exports = router;