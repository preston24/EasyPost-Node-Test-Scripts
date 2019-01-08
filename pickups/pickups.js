require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
// api.Pickup.retrieve('pickup_...').then(p => {
//     p.buy('UPS', 'Same-day Pickup').catch(console.error);
//   });