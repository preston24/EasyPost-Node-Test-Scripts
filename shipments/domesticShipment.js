require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  company: "TEST",
  name: 'Person',
  street1: '2035 E 2700 S',
  street2: '#6',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84109',
  country: 'US',
  phone: '8011234567',
  email: 'TEST123@YOPMAIL.COM',
  verify: ['delivery'],
  residential: true,
});

const fromAddress = new api.Address({
  company: "The UPS Store",
  street1: '385 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '8015398351',
  email: 'store3851@theupsstore.com',
  verify: ['delivery'],
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
      // label_format: 'PNG',
      // label_size: '7x4.75',
      // additional_handling: true,
      // delivery_confirmation: 'ADULT_SIGNATURE'
      // currency: 'USD'
      // print_custom_1_code: 'PO',
      // print_custom_1: 78910,
      // print_custom_2_code: 'IK',
      // print_custom_2: 123456
    },
    carrier_accounts: ['ca_09df5bb08bab4da3aeb7b26ce6a79a1d']
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