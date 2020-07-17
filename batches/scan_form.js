require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const scanForm = new api.ScanForm({
  shipments: ['shp_9363548906464fb1bdacbb2aa185fe21']
});

scanForm.save().then(console.log).catch(console.log);