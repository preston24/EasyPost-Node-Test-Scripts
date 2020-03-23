require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const batch = api.Batch.retrieve('batch_205681c0e91542b598de466351d9677b').then(b => {
    b.generateLabel('PDF').then(console.log).catch(err => console.log(err));
}).catch(err => console.log(err));