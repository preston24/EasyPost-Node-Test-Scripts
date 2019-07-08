require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: 'https://webhook.site/18e190a0-9781-4272-a8c2-5e7b22ae9f34'
});

webhook.save().then(console.log);
