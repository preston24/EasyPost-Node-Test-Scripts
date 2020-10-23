require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


api.User.retrieve('').then(console.log).catch(console.log);

// api.User.retrieve('').then(child => console.log(child.api_keys));