require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



// retrieve pickup
// api.Pickup.retrieve('pickup_').then(console.log);

// retrieve and buy pickup
// api.Pickup.retrieve('pickup_04bbd273a33840fda6a76768749140ad').then(p => {
//     p.buy('FedEx', 'Future-day Ground Pickup').then(console.log).catch(console.log);
//   }).catch(console.log);


  api.Pickup.retrieve('pickup_04bbd273a33840fda6a76768749140ad').then(p => {
    p.cancel().catch(console.error);
  });