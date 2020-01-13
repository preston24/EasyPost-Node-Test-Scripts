require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const batch = api.Batch.retrieve('').then(b => {
    b.generateLabel('ZPL').then(console.log).catch(err => console.log(err));
}).catch(err => console.log(err));