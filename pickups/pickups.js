require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_3ffd7491b7104eee974fb2b8feebf674').then(p => {
    p.buy('Purolator', 'PurolatorPickup').then(console.log).catch(console.error);
  });