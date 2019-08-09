require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    company: 'Tokan Manufacturing',
    name: 'Sebastian Osorio',
    street1: '9850, St-Urbain',
    // street2: '1209',
    city: 'Montreal',
    state: 'QC',
    zip: 'H3L2T2',
    country: 'CA',
    phone: '5143841312',
    email: 'sebastian@tokan.ca'
  });
  
// verifiableAddress.save().then(console.log);
  
// This will show the errors
verifiableAddress.save().then(r => console.log(JSON.stringify(r)));

