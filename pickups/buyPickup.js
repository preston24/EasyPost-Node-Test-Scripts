require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_dd2997c9beca4e73b3d023f4250898cd').then(p => {
    p.buy('FedEx', 'Same-day Ground Pickup').then(console.log).catch(console.log);
  }).catch(console.log);