require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_7050a15771244e9fa70e0c1fe14e1d17').then(s => {
    s.refund(console.log(s));
});