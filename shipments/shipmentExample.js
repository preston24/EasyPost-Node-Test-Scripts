require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses

const toAddress = new api.Address({
  // company: "The UPS Store",
  // name: 'Chester',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // phone: '8011234567',
  verify: ['delivery'],
  name: 'john doe',
  street1: 'Studio Tour Dr',
  city: 'Leavesden',
  zip: 'WD25 7LR',
  country: 'UK',
});

const fromAddress = new api.Address({
  company: 'EasyPost',
  street1: '1 Montgomery Street',
  street2: 'STE 400',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
  // phone: '',
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

fromAddress.save().then(console.log);

toAddress.save().then(console.log);

// This one shows errors
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'FedExEnvelope',
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
  // customs_info: customsInfo,
    options: {
      label_format: 'PDF',
      // print_custom_1: '123',
      // print_custom_1_code: 'PO',
      // print_custom_2: '456',
      // print_custom_2_code: 'DP',
      // print_custom_3: 'This is my RMA',
      // print_custom_3_code: 'RMA',
      // invoice_number: '$40'
    },
    carrier_accounts: ['ca_24bc0be091514b41b2c31f59808d4ede']
});

shipment.save().then(console.log);


//============buy shipment by lowest rate============
// shipment.buy(shipment.lowestRate()).catch(err => console.log(err))

// ============Buy Shipment by ID============
// api.Shipment.retrieve('shp_59784aa0ee424003b87a9ceb8ca828a0').then(s => {
//   s.buy('rate_2efcd39a7cb74dd98f732c1d211bf039').then(console.log).catch(console.log);
// }).catch(console.log);