require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_...').then(s => {
    s.refund(console.log(s));
});