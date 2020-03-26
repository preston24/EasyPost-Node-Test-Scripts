require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    // company: '',
    name: 'ANNA MELNICHUK',
    street1: 'Profsoyuznaya Ulitsa 104 345',
    // street2: 'Tower # 14-07/12"',
    city: 'MOSCOW',
    state: 'KK',
    zip: '117437',
    country: 'RU',
    // phone: '18669476872',
    // email: ''
  });
  

// verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));


verifiableAddress.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);
