require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_e659e2a42be24e9fa2dc44fe44b83d6b').then(p => {
    p.buy('Canpar', 'CanparPickup').then(console.log).catch(console.log);
  }).catch(console.log);