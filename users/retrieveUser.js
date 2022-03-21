require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// api.User.retrieve('user_01d1e191cc414598bd45b176bf39d60c').then(console.log).catch(console.log);

api.User.retrieve('user_84d904b7481a4a62afd4256585253e75').then(child => console.log(child.api_keys));