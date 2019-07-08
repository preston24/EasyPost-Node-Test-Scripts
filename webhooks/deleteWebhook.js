require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Webhook.delete('hook_593ca6d0d63e4adc8f50ad9822549ad0').then(console.log);