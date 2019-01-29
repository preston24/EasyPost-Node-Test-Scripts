require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    company: 'The UPS Store',
    name: 'Mr. Person',
    street1: '358 S 700 E',
    street2: 'Suite B',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84102',
    country: 'US',
    // phone: '0034666991783',
  });
  
//   // verifiableAddress.save().then(console.log);
  
//   // This will show me the error in the terminal
  verifiableAddress.save().then(r => console.log(JSON.stringify(r)))