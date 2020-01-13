require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
api.Pickup.retrieve('pickup_773ff1f318da4cebb67985b0105f93c2').then(p => {
    p.buy('USPS', 'NextDay').then(console.log).catch(console.log);
  }).catch(console.log);