require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_169312549782420cb6a9f458128e21be').then(p => {
    p.buy('USPS', 'NextDay').then(console.log).catch(console.error);
  });