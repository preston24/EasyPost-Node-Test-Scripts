require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



  const toAddress = new api.Address({
  // company: '',
  name: 'Store 40',
  street1: '50 Rideau St',
  // street2: '',
  city: 'Ottawa',
  state: 'ON',
  zip: 'K1N 9J7',
  country: 'CA',
  phone: '6135699941',
});

const fromAddress = new api.Address({
  // company: 'Store 30',
  name: 'Store 30',
  street1: '1401 Boul. Talbot',
  // street2: '',
  city: 'Chicoutimi',
  state: 'QC',
  zip: 'G7H 5N6',
  country: 'CA',
  phone: '4185490309',
});

// const fromAddress = new api.Address({
//   company: "TEST",
//   name: 'TEST',
//   street1: '358 S 700 E',
//   street2: 'STE B',
//   city: 'Salt Lake City',
//   state: 'UT',
//   zip: '84102',
//   country: 'US',
//   phone: '4165555556',
//   email: 'TEST123@YOPMAIL.COM',
//   // verify: ['delivery'],
// });


// fromAddress.save().then(console.log).catch(console.log);

// toAddress.save().then(console.log).catch(console.log);

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
    length: 20,
    width: 10,
    height: 5,
    weight: 2,
});

// parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    // customs_info: customsInfo,
    options: {
     label_format: "PDF",
    //  delivery_confirmation: 'ADULT_SIGNATURE'
    },
    carrier_accounts: ['ca_62e83d60f01846f2b639b5ffe51b2339']
});

// shipment.save().then(console.log).catch(console.log);

// ============buy shipment by ID============

// api.Shipment.retrieve('shp_ee0003a1570c49be910c3e60ded9e663').then(s => {
//   s.buy('rate_ccedfb713a0c40d2b0ff68876352a7f3').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============

// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);





