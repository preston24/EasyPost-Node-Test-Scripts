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

      



  // verify: ['delivery'],
  // company: 'MIRANDA SAMPLES',
  // name: 'MIRANDA SAMPLES',
  // street1: '28 BOX ST APT 601',
  // // street2: '',
  // city: 'BROOKLYN',
  // state: 'NY',
  // zip: '11222',
  // country: 'US',
  // phone: '5417281886'
});

const fromAddress = new api.Address({
  company: 'EasyPost',
  // name: '',
  street1: '2889 Ashton Blvd',
  street2: 'STE 325',
  city: 'Lehi',
  state: 'UT',
  zip: '84043',
  country: 'US',
  phone: '8012220000',
  email: 'email@email.com',


  // company: "The UPS Store",
  // name: 'John Smith',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',

  // company: 'POWERSPORT SUPERSTORE, INC',
  // name: 'Shipping Department',
  // street1: '1320 ARROW POINT DR STE 105',
  // city: 'CEDAR PARK',
  // state: 'TX',
  // zip: '78613',
  // country: 'US',
  // phone: '5125355010',
  // email: 'purchasing@powersportsuperstore.com'




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
  // predefined_package: 'Letter',
  length: 10,
  width: 10,
  height: 10,
  weight: 1,
});


parcel.save().then(console.log);


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
    options: {
      label_format: 'PNG',
      // hold_for_pickup: true,
      // label_size: '4x6',
      // postage_label_inline: true,
      // additional_handling: true,
      // delivery_confirmation: 'NO_SIGNATURE',
      // currency: 'USD'
      // invoice_number: '5097263',
      // print_custom_1_code: 'PO',
      // print_custom_1: '5125355010-5097263',
      // print_custom_2_code: 'DP',
      // print_custom_2: '3490293',
      // print_custom_3_code: 'IK',
      // print_custom_3: 'EU02600',
      // print_custom_2_barcode: true,
      // pickup_min_datetime: '2019-07-18T07:00:00.000Z',
      // pickup_max_datetime: '2019-07-22T07:00:00.000Z',
      // delivery_min_datetime: '2019-07-18T07:00:00.000Z',
      // delivery_max_datetime: '2019-07-22T07:00:00.000Z',
      // handling_instructions: 'Gate code 2652 Leave package inside black gate next to mailboxes Call 5703012335 to confirm delivery Take VPOD'
    },
    carrier_accounts: [process.env.USPS]
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