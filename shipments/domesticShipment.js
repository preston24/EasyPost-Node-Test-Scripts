require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  verify: ['delivery'],
  // // // verify: ['zip4'],
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



  name: 'Bob',
  street1: '820 E Newfield Dr',
  street2: '',
  city: 'Sandy',
  state: 'UT',
  zip: '84094',
  country: 'US',
  phone: '8014555555',
  email: 'TEST123@YOPMAIL.COM',
});

const fromAddress = new api.Address({
  // company: "StoreMcStoreFace",
  // name: 'John Smith',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',

   company: 'EasyPost',
   name: 'Mr. EP',
   street1: '345 California St',
   street2: 'FL 10',
   city: 'San Francisco',
   state: 'CA',
   zip: '94104',
   country: 'US',
   phone: '8012220000',
   email: 'email@email.com',
});


// fromAddress.save().then(console.log).catch(console.log);
// toAddress.save().then(console.log).catch(console.log);

// fromAddress.save()
// toAddress.save()

// These will break out the errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  predefined_package: 'Letter',
  // length: 5.0,
  // width: 4.0,
  // height: 3.0,
  weight: 0.5,
});


// parcel.save().then(console.log);
// parcel.save()


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // carrier: 'UPS',
  // service: 'SingleReturn',
  // reference: '1234',
  // is_return: true,
    options: {
      // hazmat: 'LIMITED_QUANTITY',
      // additional_handling: true,
      // label_date: '2020-05-29',
      // endorsement: 'RETURN_SERVICE_REQUESTED'
      print_custom_1: 'TESTING!!!!!!',
      // label_format: 'PDF',
      // delivery_confirmation: 'SIGNATURE',
      // pickup_min_datetime: '2020-05-18T07:00:00.000Z',
      // pickup_max_datetime: '2020-05-22T07:00:00.000Z',
      // delivery_min_datetime: '2020-05-18T07:00:00.000Z',
      // delivery_max_datetime: '2020-05-22T07:00:00.000Z',
      // handling_instructions: 'LEAVE AT DOOR'
      // cost_center: 'TESTING'
      // postage_label_inline: true
      // payment: {
      //   type: 'THIRD_PARTY',
      //   account: '64F022',
      //   postal_code: '84094',
      //   country: 'US'
      // }
    },
    carrier_accounts: [process.env.USPS]
});


// shipment.save().then(r => {console.log(JSON.stringify('usps_zone:' + r.usps_zone))}).catch(console.log);
// shipment.save().then(zone => {
//   console.log(zone.usps_zone);
// }).catch(console.log);

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
// });



// const shipment = new api.Shipment({
//   to_address: toAddress,
//   from_address: fromAddress,
//   parcel: parcel,
//     options: {
//       incoterm: 'DDU',
//       importer_address_id: 'adr_********************************'
//     },
// });





// const shipment = new api.Shipment({
//   to_address: toAddress,
//   from_address: fromAddress,
//   parcel: parcel,
//   reference: '1234',
//     options: {
      payment: {
        // type: 'THIRD_PARTY',
        // account: '12345',
        // postal_code: '84102',
        // country: 'US'
      }
//     },
//     carrier_accounts: [process.env.FedEx]
// });


