require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


/* Shipments and other batch child objects can either be
     * an array instances or an array of ids. */
// batch = new api.Batch({
//     shipments: ['shp_9b4f1c5803da4684aff4a16ddeb16ba6', 'shp_68b9bd742dda47aeb5f28a9bd457e632'],
// });

// batch = new api.Batch({
//     shipments: [{id: 'shp_aba84c98de9d4bd697c582d70a5f8715'}]
//   });

// batch.save().then(console.log).catch(console.log);




// api.Batch.retrieve('batch_98d86b62266e46f7b7f5c07c2f66273e').then(b => {
//   b.createScanForm().then(console.log);
// });