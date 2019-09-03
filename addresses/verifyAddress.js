require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const verifiableAddress = new api.Address({
    verify_strict: ['delivery'],
    // company: '',
    // name: 'Luke Skywalker',
    // street1: 'Mecca St',
    // // street2: '1209',
    // city: 'Amman',
    // // state: 'CA',
    // // zip: '12559',
    // country: 'JO',
    // phone: '3065265109',
    // email: 'email@email.com'

    name: "The Dude",
    street1: "Summit House",
    street2: "Athey St",
    city: "Macclesfield",
    state: "Cheshire",
    zip: "SK1 16QU",
    country: "GB",
    phone: "1234567890",
    email: "email@email.com"
  });
  
// verifiableAddress.save().then(console.log).catch(console.log);
  
// This will show the errors
verifiableAddress.save().then(console.log).catch(r => console.log(JSON.stringify(r)));
