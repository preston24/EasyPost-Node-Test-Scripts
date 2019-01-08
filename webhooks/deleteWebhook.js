require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Webhook.delete('hook_6bbc7408ae6e4ca480a56ce162fe0a17').then(console.log);