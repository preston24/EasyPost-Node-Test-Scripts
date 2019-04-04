require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  // company: "TEST",
  name: 'Gary Lenhart',
  street1: '1310 43rd Ave',
  street2: 'Apt 1',
  city: 'San Francisco',
  state: 'CA',
  zip: '94122',
  country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',
  // verify: ['delivery'],
  // residential: true
});

const fromAddress = new api.Address({
  // company: "TEST",
  name: 'CardCow.com',
  street1: '97 Grant Rd',
  // street2: 'STE B',
  city: 'Harvard',
  state: 'MA',
  zip: '01451',
  country: 'US',
  phone: '7812692273',
  // email: 'store3851@theupsstore.com',
  // verify: ['delivery'],
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

// This one shows errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'Letter',
  length: 8,
  width: 13,
  height: 12,
  weight: 1,
});


parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
    options: {
      label_format: 'PNG',
      label_size: '4x6',
      hazmat: 'ORMD',
      // print_custom_2: 'IK',
      // print_custom_2: 123456
      // additional_handling: true,
      // delivery_confirmation: 'ADULT_SIGNATURE'
      // currency: 'USD'
    },
    carrier_accounts: ['ca_b281591570e24e0c961a09901a5c2b57', 'ca_df03ec256385433aa343858de35adca8']
});


shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============Buy Shipment by ID============

// api.Shipment.retrieve('shp_09ecc17b5db448739dea2b9392dd3592').then(s => {
//   s.buy('rate_95a5167d00974908aece7c0d7f623d9a').then(console.log).catch(console.log);
// }).catch(console.log);