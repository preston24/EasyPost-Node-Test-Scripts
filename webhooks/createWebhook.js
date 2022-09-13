require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: ''
});

webhook.save().then(console.log);
