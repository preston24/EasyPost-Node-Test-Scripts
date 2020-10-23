require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const scanForm = new api.ScanForm({
  shipments: ['shp_803c5998aadb46ad9169f82e5addf3c2']
});

scanForm.save().then(console.log).catch(console.log);