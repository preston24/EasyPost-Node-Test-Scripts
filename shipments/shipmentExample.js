require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses

const toAddress = new api.Address({
  // company: "The UPS Store",
  name: 'The Guy',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  phone: '8011234567',
  // verify: ['delivery'],
});

const fromAddress = new api.Address({
  company: 'EasyPost',
  name: 'Preston',
  street1: '417 Montgomery Street',
  street2: '5th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
  phone: '8011112222',
});


// fromAddress.save().then(console.log);

// toAddress.save().then(console.log);

// This one shows errors
// toAddress.save().then(r => console.log(JSON.stringify(r))).catch(console.log);

const parcel = new api.Parcel({
  // predefined_package: 'Softpack',
  length: 11,
  width: 11,
  height: 11,
  weight: 160,
});


// parcel.save().then(console.log);

const shipment = new api.Shipment({
  to_address: toAddress,
  from_address: fromAddress,
  parcel: parcel,
  // customs_info: customsInfo,
    options: {
      label_format: 'PDF',
      print_custom_1: '123',
      print_custom_1_code: 'PO',
      print_custom_2: '456',
      print_custom_2_code: 'DP',
      print_custom_3: 'This is my RMA',
      print_custom_3_code: 'RMA',
      invoice_number: '$40'
    },
    carrier_accounts: ['ca_09df5bb08bab4da3aeb7b26ce6a79a1d']
});

// shipment.save().then(console.log);


//============buy shipment by lowest rate============
// shipment.buy(shipment.lowestRate()).then(console.log).catch(console.log)

// ============Buy Shipment by ID============
api.Shipment.retrieve('shp_a0676696429042d7921ec03630688c8d').then(s => {
  s.buy('rate_dc89c4c1952e4735abcb8a99fdabecf1').then(console.log).catch(console.log);
}).catch(console.log);