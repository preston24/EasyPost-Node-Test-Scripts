require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    company: '',
    name: 'Test',
    street1: '820 E Newfield Dr',
    // street2: 'RR 3 Stn Main',
    city: 'Sandy',
    state: 'UT',
    zip: '84094',
    country: 'US',
    // phone: '18669476872',
    // email: ''
  });
  
// verifiableAddress.save().then(console.log).catch(console.log);
  
// This will show the errors
verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));