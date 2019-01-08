require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const webhook = new api.Webhook({
    url: 'https://webhook.site/45521d0c-5f24-4ced-aaa4-cebd43c37e21'
});

webhook.save().then(console.log);