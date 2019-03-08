require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  company: "TEST",
  name: 'TEST',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',
  // verify: ['delivery'],
});

const fromAddress = new api.Address({
  company: "TEST",
  name: 'TEST',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',
  // verify: ['delivery'],
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

// This one shows errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'FEDEXPAK',
  // length: 2.7,
  // width: 8,
  // height: 18,
  weight: 80,
});


parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
    options: {
      label_format: 'PDF',
      // delivery_confirmation: 'ADULT_SIGNATURE'
    },
    carrier_accounts: ['ca_09df5bb08bab4da3aeb7b26ce6a79a1d']
});


shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log)

// ============Buy Shipment by ID============

// api.Shipment.retrieve('shp_b5feb71374d346aabdff6309daa0ce28').then(s => {
//   s.buy('rate_42c088b475684c3aa855853003fca100').then(console.log).catch(console.log);
// }).catch(console.log);