require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// ===============Covert label from PNG to ZPL====================
api.Shipment.retrieve('shp_b3f855bd749643aab4f504f36b01a3d6').then(shipment => {
    shipment.convertLabelFormat('ZPL').then(console.log);
  }).catch(console.log);