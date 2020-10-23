require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    // verify_strict: ['delivery', 'zip4'],
    verify: ['delivery', 'zip4'],
    company: 'UT SCHOOL OF DENTISTRY',
    name: 'GARY FREY',
    street1: '700 CAMBRIDGE St. Ste. 3450',
    street2: '',
    city: 'HOUSTON',
    state: 'TX',
    zip: '77054',
    country: 'US',
    // phone: '5634245161',
    // email: 'eliteinkprinting@gmail.com'
  });
  


// verifiableAddress.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);


// verifiableAddress.save().then(a => {
//     console.log(a.verifications)
//   }).catch(console.log);