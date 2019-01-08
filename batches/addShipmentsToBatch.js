require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const batch = api.Batch.retrieve('batch_');

/* Batch will return whether or not the batch operation was
 * created - not the shipments itself. You will need to
 * listen to a webhook event to confirm once the shipments
 * are associated. */
batch.addShipments(['shp_']).then(console.log);