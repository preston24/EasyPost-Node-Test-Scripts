require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



  const toAddress = new api.Address({
  // company: '',
  // name: 'TESTY MCTESTFACE',
  // street1: '721 Government St',
  // // street2: '',
  // city: 'Victoria',
  // state: 'BC',
  // zip: 'V8W 1W5',
  // country: 'CA',
  // phone: '6135699941',

  // company: "TEST",
  // name: 'TEST',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',


  name: 'test',
  street1: 'Bleicherstr. 40',
  street2: '',
  city: 'Bremen',
  state: 'HB',
  zip: '28203',
  country: 'DE',
  phone: '1234567989077'
});

const fromAddress = new api.Address({
  // company: "TEST",
  // name: 'TEST',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',


  company: '',
  name: 'Test',
  street1: '600 University Ave',
  // street2: '',
  city: 'Toronto',
  state: 'ON',
  zip: 'M5G 1X5',
  country: 'CA',
  phone: '6135699941',
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: "NOEEI 30.36",
    customs_certify: true,
    customs_signer: 'TEST',
    contents_type: 'other',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',
    contents_explanation: 'Stuff',
    // declaration: '',
    customs_items: [
        new api.CustomsItem({
            description: 'Things',
            quantity: 1,
            weight: 100,
            value: 10,
            hs_tariff_number: '852352',
            origin_country: 'US',
            code: 'MPH0213',
            currency: 'USD'
        })],
});

const parcel = new api.Parcel({
    // predefined_package: 'UPS10kgBox',
    length: 25,
    width: 19,
    height: 19,
    weight: 260,
});

parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    // is_return: true,
    options: {
      // bill_third_party_account: '12345'
    //  incoterm: 'DAP',
    //  label_format: "PDF",
    //  delivery_confirmation: 'SIGNATURE',
    //  hold_for_pickup: true,
    //  handling_instructions: 'These are my instructions!!!!!'
    },
    carrier_accounts: ['ca_ee4c27915ef845f49f43f9302a7aa21f'],
});

shipment.save().then(console.log).catch(console.log);



// ============buy shipment by ID============
// api.Shipment.retrieve('shp_9687957fb3934de283c9dc447ca576c7').then(s => {
//   s.buy('rate_7c6eda5da6be40dda5abe0c7a8c2371b').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);