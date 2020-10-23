require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_8d81275a507f429984761b0414e1da73').then(s => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
}).catch(console.log);
