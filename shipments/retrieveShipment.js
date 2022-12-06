require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Shipment.retrieve('shp_e63429e3755a498c94b06557ea9bd51d').then(console.log);