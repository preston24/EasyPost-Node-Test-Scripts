require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    // verify_strict: ['delivery', 'zip4'],
    verify: ['delivery', 'zip4'],
    company: 'Precision Power Equipment',
    // name: 'John Smith',
    street1: '16146 e main st',
    // street2: 'House #52',
    city: 'Mt Eaton',
    state: 'OH',
    zip: '44659',
    country: 'US',
    // phone: '415-123-4567',
    // email: 'eliteinkprinting@gmail.com'
  });

  


verifiableAddress.save().then(a => {console.log(JSON.stringify(a))}).catch(console.log);


verifiableAddress.save().then(a => {
    console.log(a.verifications);
    console.log(a.id);
  }).catch(console.log);