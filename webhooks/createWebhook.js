require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: 'https://webhook.site/5d6ff0dc-b751-4c0b-9e77-6bca48e14d31'
});

webhook.save().then(console.log);
