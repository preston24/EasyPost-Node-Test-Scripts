require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    company: 'Elite Ink Printing',
    // name: 'Test Name',
    street1: '21185 North Brady Street',
    // street2: 'CO BLU618035-BEH-AC',5034 S 153RD STOmaha NE 68137
    city: 'Davenport',
    state: 'IA',
    zip: '52806',
    country: 'US',
    phone: '5634245161',
    email: 'eliteinkprinting@gmail.com'
  });
  

// verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));


verifiableAddress.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);
