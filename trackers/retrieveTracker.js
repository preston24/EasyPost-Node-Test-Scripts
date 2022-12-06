require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



// api.Tracker.retrieve('').then(console.log);


api.Tracker.retrieve('trk_1caa521e13ca473694350b83de6b880b').then(t => {
    console.log(JSON.stringify(t))
}).catch(console.log);