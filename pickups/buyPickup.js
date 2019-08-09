require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_f906e2fd62ab495f9b19e7272b188591').then(p => {
    p.buy('FedEx', 'Future-day Ground Pickup').then(console.log).catch(console.log);
  }).catch(console.log);