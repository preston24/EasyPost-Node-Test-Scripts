require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



// api.Tracker.retrieve('').then(console.log);


api.Tracker.retrieve('trk_d735dcf663484fed95cc1fee6caa7bb9').then(t => {
    console.log(JSON.stringify(t))
}).catch(console.log);