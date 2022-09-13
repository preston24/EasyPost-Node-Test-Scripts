require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_f30ed38c076844dab7cc49d280001f57').then(s => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
}).catch(console.log);
