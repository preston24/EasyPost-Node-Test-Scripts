require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
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
  company: 'test1234',
  name: 'CGW12 CGW',
  street1: '12125 Yonge Street',
  street2: '3334 (REF: 222)',
  city: 'Toronto',
  state: 'ON',
  zip: 'L4E 3M4',
  country: 'CA',
  phone: '9999999999',
  email: 'testingbydev@gmail.com'
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: 'NOEEI 30.37(a)',
    customs_certify: true,
    customs_signer: 'Customs Signer',
    contents_type: 'merchandise',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',
    contents_explanation: '',
    declaration: '',
    customs_items: [
        new api.CustomsItem({
            'description': 'candy',
            'quantity': 1,
            'weight': 1.9,
            'value': 1.00,
            // 'hs_tariff_number': '',
            'origin_country': 'US',
            // 'currency': 'MXN',
        })],
});

const parcel = new api.Parcel({
    length: 10,
    width: 8,
    height: 1,
    weight: 4,
    mode: 'test'
});

parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    options: {
     label_format: "PDF",
     delivery_confirmation: 'ADULT_SIGNATURE'
    },
    carrier_accounts: ['ca_09df5bb08bab4da3aeb7b26ce6a79a1d']
});

shipment.save().then(console.log).catch(console.log);

// ============buy shipment by ID============

// api.Shipment.retrieve('shp_48714a5c763a448bb2c918cb3689ebac').then(s => {
//   s.buy('rate_f9ebe56cce184feca10ed4e84014efab').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============

// api.Shipment.retrieve('shp_86144f0c99d94866a5b9b28d43b78686').then(s => {
//     s.buy(s.lowestRate(), 249.99).then(console.log).catch(console.log);
//   }).catch(console.log);