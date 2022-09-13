require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.personalTestKey;

const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


const toAddress = new api.Address({
  verify: ['delivery', 'zip4'],
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


  
  // name: 'Preston Bayle ',
  // street1: '820 E Newfield Dr',
  // // street2: '',
  // city: 'Sandy',
  // state: 'UT',
  // zip: '84094',
  // country: 'US',
  // phone: '8017120492',
  // email: 'preston_bayle@hotmail.com',
  // residential: true
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



  //  company: 'EasyPost',
  //  name: 'Mr. EP',
  //  street1: '345 California St',
  //  street2: 'FL 10',
  //  city: 'San Francisco',
  //  state: 'CA',
  //  zip: '94104',
  //  country: 'US',
  //  phone: '8012220000',
  //  email: 'email@email.com',
  //  carrier_facility: 'SFO'
});




const returnAddress = new api.Address({
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
});


// fromAddress.save().then(console.log).catch(console.log);
// toAddress.save().then(console.log).catch(console.log);

// fromAddress.save()
// toAddress.save()

// These will break out the errors
// fromAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);


// const toAddress = new api.Address({ "id": "adr_091a999b7071442fa922d6f8e0fab413" });
// const fromAddress = new api.Address({ "id": "adr_b2904a39f49d4b1eb0b632395302cc78" });

const parcel = new api.Parcel({
  // predefined_package: 'FlatRateEnvelope',
  length: 10,
  width: 5,
  height: 8,
  weight: 10,
});


// parcel.save().then(console.log);
// parcel.save()


const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  // return_address: returnAddress,
  parcel: parcel,
  // carrier: 'USPS',
  // service: 'Priority',
  // reference: 'Testing',
  // is_return: true,
  // ancillary_endorsement: true,
    options: {
      // hazmat: null,
      // additional_handling: true,
      // entry: "DDU",
      // po_sort: "SD"
      // label_date: '2020-05-29',
      // endorsement: 'ADDRESS_SERVICE_REQUESTED',
      // carrier_insurance_amount: 10000
      // print_custom_1: 'TESTING!!!!!!',
      // print_custom_1_code: 'reference'
      // label_format: 'ZPL',
      // label_size: '8.5X11_TOP_HALF_LABEL',
      // certified_mail: true,
      // return_receipt: true,
      // dropoff_type: "DROP_BOX",
      // delivery_confirmation: 'NO_SIGNATURE',
      // pickup_min_datetime: '2022-02-18T07:00:00.000Z',
      // pickup_max_datetime: '2022-02-22T07:00:00.000Z',
      // delivery_min_datetime: '2022-02-18T07:00:00.000Z',
      // delivery_max_datetime: '2022-02-22T07:00:00.000Z',
      // handling_instructions: 'LEAVE AT DOOR'
      // cost_center: '06'
      // postage_label_inline: true
      // payment: { 
      //   type: 'THIRD_PARTY',
      //   account: '123456',
      //   postal_code: '84094',
      //   country: 'US'
      // }
    },
    carrier_accounts: [process.env.USPS],
    // carrier_accounts: ['ca_33cf7ac0298f45f89734f65d9691d114']
});


//SOME VARIOUS WAYS TO RETURN RESPONSE BODY INFO I'VE PLAYED AROUND WITH

// shipment.save().then(s => {
//   console.log(s.rates)
//   console.log(s.messages);
//   console.log(s.id);
//   console.log(s.usps_zone);
//   // console.log(JSON.stringify(s.postage_label)); // for one-call buys
// }).catch(console.log);


// shipment.save().then(s => {
//   s.rates.forEach(x => {
//     const theGoods = x.service + " " + "$" + x.rate
//     console.log(theGoods);
//   }) 
// }).catch(console.log);



// shipment.save().then(s => {
//   for(i = 0; i < s.rates.length; i++) {
//     console.log(s.rates[i].service + " " + "$" + s.rates[i].rate)
//   }
// })


// shipment.save().then(s => {
//   console.log(s.rates[0].service);
//   console.log(s.rates[0].carrier);
//   console.log(s.rates[0].rate);
//   console.log(s.rates[0].delivery_days);
// }).catch(console.log);


// shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
shipment.save().then(s => {
  s.buy(s.lowestRate()).then(console.log).catch(console.log);
 }).catch(console.log);



// ============Buy Shipment by ID============
// api.Shipment.retrieve('shp_f2506c1ae01e4216a7341c24be29d0a3').then(s => {
//   s.buy('rate_699e531c47c1474dad67861c66733b55').then(console.log).catch(console.log);
// }).catch(console.log);



//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'First')
//     .then(console.log).catch(console.log);
// }).catch(console.log);