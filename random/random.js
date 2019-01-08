require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// Covert label from PNG to ZPL 

// api.Shipment.retrieve('shp_952eff7c619e42e2994186ca25cb604e').then(shipment => {
//     shipment.convertLabelFormat('ZPL').then(console.log);
//   });




// api.Shipment.retrieve('shp_4027a93debd040d2ae0b6d745310f1ae').then(s => {
//     s.buy(s.lowestRate(), 249.99).then(console.log);
//   });


  