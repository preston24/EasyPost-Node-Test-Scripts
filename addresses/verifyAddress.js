require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    // verify_strict: ['delivery', 'zip4'],
    verify: ['delivery', 'zip4'],
    company: 'Saint Regis Hotel',
    name: 'John Smith',
    street1: '125 3rd St',
    // street2: 'UNIT 1240',
    city: 'San Francisco',
    state: 'CA',
    zip: '94103',
    country: 'us',
    // phone: '415-123-4567',
    // email: 'eliteinkprinting@gmail.com'
  });

  


verifiableAddress.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);


// verifiableAddress.save().then(a => {
//     console.log(a.verifications);
//     console.log(a.id);
//   }).catch(console.log);