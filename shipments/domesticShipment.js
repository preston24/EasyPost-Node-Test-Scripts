require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  verify: ['delivery'],
  // // verify: ['zip4'],
  // company: 'Stark Tower',
  // name: 'Tony Stark',
  // street1: '200 Park Ave',
  // // street2: '',
  // city: 'New York',
  // state: 'NY',
  // zip: '10079',
  // country: 'US',
  // phone: '8012220000',
  // email: 'email@email.com',




  name: 'Generic Estimate',
  street1: '1300 clay st suite 162B',
  street2: '',
  city: 'Oakland',
  state: 'CA',
  zip: '94162',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',
});

const fromAddress = new api.Address({
  company: "StoreMcStoreFace",
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

// These will break out the errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'Letter',
  length: 10,
  width: 10,
  height: 10,
  weight: 10,
});


parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // carrier: 'UPS',
  // reference: '1234',
  // service: 'Ground',
  // is_return: true,
    options: {
      // hazmat: 'LIMITED_QUANTITY',
      // additional_handling: true,
      // label_date: '2019-08-27',
      // endorsement: 'RETURN_SERVICE_REQUESTED'
      label_format: 'PDF',
      // hold_for_pickup: true,
      // label_size: '4x6',
      // postage_label_inline: true,
      // additional_handling: true,
      // delivery_confirmation: 'NO_SIGNATURE',
      // registered_mail: true,
      // return_receipt: true,
      // alcohol: true,
      // currency: 'USD'
      // invoice_number: '6789',
      // print_custom_1_barcode: true,
      // print_custom_1_code: 'TESTING 123',
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
      // cost_center: 'EASYPOST'
      // payment: {
      //   type: 'SENDER',
      //   account: '12345',
      //   postal_code: '84102',
      //   country: 'US'
      // }
    },
    carrier_accounts: [process.env.USPS]
});


// shipment.save().then(console.log).catch(console.log);



//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);



// ============Buy Shipment by ID============
// api.Shipment.retrieve('shp_08b5fcebd98044ba98f520d89ff76825').then(s => {
//   s.buy('rate_2217cd1c93e64f6b87f0dccbea43b3a6').then(console.log).catch(console.log);
// }).catch(console.log);



//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'First')
//     .then(console.log).catch(console.log);
// }).catch(console.log);








// const shipment = new api.Shipment({
//   to_address: toAddress,
//   from_address: fromAddress,
//   parcel: parcel,
//     options: {
//       label_format: 'ZPL',
//     },
//     carrier_accounts: [process.env.USPS]
// });