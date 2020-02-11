require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    company: '',
    name: 'Test',
    street1: '2 rue des fleurs',
    // street2: 'Tower # 14-07/12"',
    city: 'Regina',
    state: 'SK',
    zip: 'G3H 2H7',
    country: 'CA',
    // phone: '18669476872',
    // email: ''
  });
  

// verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));


verifiableAddress.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);
