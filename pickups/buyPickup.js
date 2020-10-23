require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_ec0a5fa811a1426a859a57557e92e9c7').then(p => {
    p.buy('FedEx', 'Future-day Express Pickup').then(console.log).catch(console.log);
  }).catch(console.log);