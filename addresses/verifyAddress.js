require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    company: '',
    name: 'Test',
    street1: '2119 E 93rd Street',
    street2: 'L15',
    city: 'Cleveland',
    state: 'OH',
    zip: '44106',
    country: 'US',
    // phone: '18669476872',
    // email: ''
  });
  

verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));