require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_d998174b56754668a7244c061e09f03e').then(s => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
}).catch(console.log);
