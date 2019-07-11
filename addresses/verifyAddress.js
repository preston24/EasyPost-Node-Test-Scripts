require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'BAtch test',
    name: 'Test',
    street1: '3255 Big Spruce Way',
    // street2: 'APT 302',
    city: 'Park City',
    state: 'UT',
    zip: '884098',
    country: 'US',
    // phone: '9546681319',
    // email: 'barb4020@aol.com'
  });
  
// verifiableAddress.save().then(console.log);
  
// This will show the errors
verifiableAddress.save().then(r => console.log(JSON.stringify(r)));