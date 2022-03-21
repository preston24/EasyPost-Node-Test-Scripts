require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const scanForm = new api.ScanForm({
  shipments: ['shp_4ed0a1dcf0144808819c3831794b987a']
});

scanForm.save().then(console.log).catch(console.log);