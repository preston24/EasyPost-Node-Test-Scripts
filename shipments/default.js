require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const options = require('../options');

// From address

const fromAddress = new api.Address({
    company: 'The UPS Store ',
    street1: '358 S 700 E',
    street2: 'Ste B',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84102',
    phone: '801-712-0492'
  });
  
  fromAddress.save().then(console.log);

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

