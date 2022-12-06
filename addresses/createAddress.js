require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



const toAddress = new api.Address({
    verify: ['delivery', 'zip4'],
    company: 'EasyPost',
    name: 'Mr. EP',
    street1: '401 Independence Rd',
    // street2: 'FL 10',
    city: 'Florence',
    state: 'NJ',
    zip: '08518-2200',
    country: 'US',
    // phone: '8012220000',
});

toAddress.save().then(console.log).catch(console.log);

const fromAddress = new api.Address({
    company: "StoreMcStoreFace",
    name: 'John Smith',
    street1: '358 S 700 E',
    street2: 'STE B',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84102',
    country: 'US',
    phone: 'abscskdjflksjoedkslakdsfjlskejdisl',
    email: 'TEST123@YOPMAIL.COM',
  });

//   fromAddress.save().then(console.log).catch(console.log);




  // api.Address.retrieve('adr_0b1d4a2aecd24056865753553144afab').then(address => {
  //   console.log(address.id);
  // }).catch(console.log);