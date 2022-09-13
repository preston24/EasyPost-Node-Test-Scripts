require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Shipment.retrieve('shp_f0bb69b9d14a4d9b89e354169f86b2f4').then(console.log);