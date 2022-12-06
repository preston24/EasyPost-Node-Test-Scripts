require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_b4ca923f992947fd8a3252f0c8a2ea58').then(s => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
}).catch(console.log);
