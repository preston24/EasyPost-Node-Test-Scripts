require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'BAtch test',
    name: 'Test',
    street1: '10 Brougham Hays',
    // street2: 'APT 302',
    city: 'Bath',
    state: 'Somerset',
    zip: 'BA23QU',
    country: 'GB',
    phone: '447538431285',
    // email: 'barb4020@aol.com'
  });
  
// verifiableAddress.save().then(console.log);
  
// This will show the errors
verifiableAddress.save().then(r => console.log(JSON.stringify(r)));