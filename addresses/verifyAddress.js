require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify: ['delivery'],
    // company: 'NIE Y3405160 R',
    name: 'john doe',
    street1: 'CAMPAÑA 206 COLONIA INDUSTRIAL',
    street2: 'CAPAELA 218',
    city: 'Laguna del rey',
    state: 'CO',
    zip: '27630',
    country: 'MX',
    // phone: '0034666991783',
  });
  
//   // verifiableAddress.save().then(console.log);
  
//   // This will show me the error in the terminal
  verifiableAddress.save().then(r => console.log(JSON.stringify(r)))