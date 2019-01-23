require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'NIE Y3405160 R',
    name: 'Joe Shmo',
    street1: '200 W Magee Road',
    street2: 'Suite 130',
    city: 'Tucson',
    state: 'Atizone',
    zip: '94704',
    country: 'US',
    // phone: '0034666991783',
  });
  
//   // verifiableAddress.save().then(console.log);
  
//   // This will show me the error in the terminal
  verifiableAddress.save().then(r => console.log(JSON.stringify(r)))