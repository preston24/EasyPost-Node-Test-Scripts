require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const batch = api.Batch.retrieve('batch_');


batch.addShipments(['shp_344855ffa97848f3879db46aeef27904']).then(console.log);