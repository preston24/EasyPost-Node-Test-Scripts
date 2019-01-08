require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// To address 

const toAddress = new api.Address({
    name: "The Dude",
    street1: "607 Venezia Ave",
    city: "Venice",
    state: "CA",
    zip: "90291",
    country: "US",
    phone: "5623214422",
    verify: ["delivery"]
});

toAddress.save().then(console.log);