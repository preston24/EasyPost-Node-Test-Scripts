require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// To address 

const toAddress = new api.Address({
    verify: ['delivery'],
    company: 'TEST',
    name: 'TEST',
    street1: '636 Godwin Ave',
    street2: 'APT 18B',
    city: 'Midland Park',
    state: 'NJ',
    zip: '07432',
    country: 'US',
});

toAddress.save().then(console.log);