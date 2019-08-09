require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  verify: ['delivery'],
  company: 'Stark Tower',
  name: 'Tony Stark',
  street1: '200 Park Ave',
  // street2: '',
  city: 'New York',
  state: 'NY',
  zip: '10079',
  country: 'US',
  phone: '8012220000',
  email: 'email@email.com',


  //   company: 'EasyPost',
  // // name: '',
  // street1: '2889 Ashton Blvd',
  // street2: 'STE 325',
  // city: 'Lehi',
  // state: 'UT',
  // zip: '84043',
  // country: 'US',
  // phone: '8012220000',
  // email: 'email@email.com',
  // residential: false,
});

const fromAddress = new api.Address({
  // company: 'EasyPost',
  // // name: '',
  // street1: '2889 Ashton Blvd',
  // street2: 'STE 325',
  // city: 'Lehi',
  // state: 'UT',
  // zip: '84043',
  // country: 'US',
  // phone: '8012220000',
  // email: 'email@email.com',


  company: "The UPS Store",
  name: 'John Smith',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',


  //  company: 'Stark Tower',
  //  name: 'Tony Stark',
  //  street1: '200 Park Ave',
  //  // street2: '',
  //  city: 'New York',
  //  state: 'NY',
  //  zip: '10079',
  //  country: 'US',
  //  phone: '8012220000',
  //  email: 'email@email.com',
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

// This one shows errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  predefined_package: 'Letter',
  // length: 10,
  // width: 10,
  // height: 10,
  weight: 1,
});


parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // reference: '1234',
  // is_return: true,
    options: {
      // label_format: 'PDF',
      // hold_for_pickup: true,
      // label_size: '4x6',
      // postage_label_inline: true,
      // additional_handling: true,
      // delivery_confirmation: 'ADULT_SIGNATURE',
      // alcohol: true,
      // currency: 'USD'
      // invoice_number: '123456',
      // print_custom_1_barcode: true,
      // print_custom_1_code: 'SY',
      // print_custom_1: 'TEST',
      // print_custom_2_code: 'DP',
      // print_custom_2: '123456',
      // print_custom_3_code: 'IK',
      // print_custom_3: '7890',
      // pickup_min_datetime: '2019-07-18T07:00:00.000Z',
      // pickup_max_datetime: '2019-07-22T07:00:00.000Z',
      // delivery_min_datetime: '2019-07-18T07:00:00.000Z',
      // delivery_max_datetime: '2019-07-22T07:00:00.000Z',
      // handling_instructions: 'LEAVE AT DOOR'
    },
    carrier_accounts: ['ca_6542437f42534b8fa49e07f65d8806a7']
});


shipment.save().then(console.log).catch(console.log);



//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);



// ============Buy Shipment by ID============
// api.Shipment.retrieve('shp_0abccac5c0324e85944673db614993b4').then(s => {
//   s.buy('rate_5b4485da2d294056b1355a1b67002eb6').then(console.log).catch(console.log);
// }).catch(console.log);