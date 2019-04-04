require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'The UPS Store',
    name: 'Oleg Antonov',
    street1: '10303 Rutland Village East',
    city: 'Austin',
    state: 'TX',
    zip: '78758',
    country: 'US',
    phone: '5555555555',
  });
  
// verifiableAddress.save().then(console.log);
  
// This will show me the error in the terminal
verifiableAddress.save().then(r => console.log(JSON.stringify(r)))