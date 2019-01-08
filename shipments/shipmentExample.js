require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses

const toAddress = new api.Address({
  // company: 'State Farm',
  name: 'Chester',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  phone: '8011234567',
  verify: ['delivery'],
  // name: 'Alexis Atallah',
  // street1: 'Beirut, Achrafieh, Hotel Dieu de Fr',
  // street2: '',
  // city: 'Achrafieh',
  // state: 'Beirut',
  // zip: '1100',
  // country: 'LB',
  // phone: '0096171968278',
  // email: ''
});


const fromAddress = new api.Address({
  company: 'The UPS Store',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84121',
  phone: '8011234567',
  // company: 'GlobalShopex LLC.',
  // street1: '9990 NW 14th Street',
  // street2: 'Suite 110',
  // city: 'MIAMI',
  // state: 'FL',
  // country: 'US',
  // phone: '+1 (786) 845 8826',
  // email: ''
});


// const customsInfo = new api.CustomsInfo({
//   id: 'cstinfo_0f67225ed65e41e28a9c0e7598903586',
//   customs_item: [
//     new api.CustomsItem({
//       'id': 'cstitem_ff5c8883d9b74d00a2b0c7b4c60e023a'
//     })],
// });


// const customsInfo = new api.CustomsInfo({
//   eel_pfc: 'NOEEI 30.37(a)',
//   customs_certify: true,
//   customs_signer: 'Steve Brule',
//   contents_type: 'merchandise',
//   contents_explanation: '',
//   restriction_type: 'none',
//   restriction_comments: '',
//   non_delivery_option: 'abandon',
//   customs_items: [
//     new api.CustomsItem({
//       'description': 'Sweat shirts',
//       'quantity': 2,
//       'weight': 11,
//       'value': 23,
//       'hs_tariff_number': '654321',
//       'origin_country': 'US'
//     })],
// });

// fromAddress.save().then(console.log);

// toAddress.save().then(console.log);

// This one shows errors
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'Letter',
  length: 10,
  width: 10,
  height: 10,
  weight: 21.6,
});


// parcel.save().then(console.log);

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // customs_info: customsInfo,
    // options: {
    //   label_format: 'PDF',
    //   print_custom_1: '123',
    //   print_custom_1_code: 'PO',
    //   print_custom_2: '456',
    //   print_custom_2_code: 'DP',
    //   print_custom_3: 'This is my RMA',
    //   print_custom_3_code: 'RMA',
    //   invoice_number: '$40'
    // },
    carrier_accounts: ['ca_df03ec256385433aa343858de35adca8']
});

// shipment.save().then(console.log);

// shipment.buy(shipment.lowestRate(), 249.99).catch(err => console.log(err))

// ============buy shipment by ID============
api.Shipment.retrieve('shp_dd8f906731c342408bed5dfbcfd1aeda').then(s => {
  s.buy('rate_ea2946bfb1724bf2a5e5533ce35de073').then(console.log).catch(console.log);
}).catch(console.log);