require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Webhook.delete('hook_5146e674f32d43cebddb30e29bc45db5').then(console.log);