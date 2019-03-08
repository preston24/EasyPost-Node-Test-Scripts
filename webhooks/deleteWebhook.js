require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Webhook.delete('hook_b8be6c6dcae84926b24428662d2e9949').then(console.log);