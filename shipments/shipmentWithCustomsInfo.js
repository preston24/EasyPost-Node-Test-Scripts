require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses

// const fromAddress = new api.Address({
//   company: 'EasyPost',
//   street1: '345 California St',
//   street2: '10th Floor',
//   city: 'San Francisco',
//   state: 'CA',
//   zip: '94104',
//   phone: '8011234567'
// });

const fromAddress = new api.Address({
    company: "City Images",
    name: "Gareth Little",
    street1: "8 Avery Row",
    city: "London",
    state: "",
    zip: "W1K 4AL",
    country: "GB",
    phone: "02075691982"
});

const toAddress = new api.Address({
    company: "City Images",
    name: "Gareth Little",
    street1: "8 Avery Row",
    city: "London",
    state: "",
    zip: "W1K 4AL",
    country: "GB",
    phone: "02075691982"
});

fromAddress.save().then(console.log);

toAddress.save().then(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: null,
    customs_certify: true,
    customs_signer: 'Steve Brule',
    contents_type: 'merchandise',
    contents_explanation: '',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'abandon',
    contents_explanation: 'this is a box full of shredded news paper',
    declaration: 'officially speaking, this box is filled with shredded news paper',
    customs_items: [
        new api.CustomsItem({
            'description': 'Sweat shirts',
            'quantity': 2,
            'weight': 11,
            'value': 23,
            'hs_tariff_number': '654321',
            'origin_country': 'US',
        })],
});

const parcel = new api.Parcel({
    length: 3.94,
    width: 3.94,
    height: 3.94,
    weight: 352.74,
    mode: 'test'
});

parcel.save().then(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    options: {
     label_format: "PNG",
     saturday_delivery: true,
    },
    carrier_accounts: ['ca_42aacf9b4fd0470b9a03d9b483a2323a']
});

shipment.save().then(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_7bb50717965746e985bdc83adf203b5d').then(s => {
//   s.buy('rate_c44175bac86248abab82385b37194e73').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
// api.Shipment.retrieve('shp_').then(s => {
  //   s.buy(s.lowestRate(), 249.99).then(console.log);
  // });