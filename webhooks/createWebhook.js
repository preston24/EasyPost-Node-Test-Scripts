require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: 'https://webhook.site/71ee2bfc-31c9-44f6-9f68-523aa5c49500'
});

webhook.save().then(console.log);
