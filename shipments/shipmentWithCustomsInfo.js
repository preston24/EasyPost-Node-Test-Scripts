require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// set addresses

const fromAddress = new api.Address({
  company: 'EasyPost',
  street1: '345 California St',
  street2: '10th Floor',
  city: 'San Francisco',
  state: 'CA',
  zip: '94104',
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
     label_format: "ZPL"
    },
    // carrier_accounts: ['ca_ab7cca42bab8490baf712016ee905deb']
});

shipment.save().then(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_').then(s => {
//   s.buy('rate_').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
// api.Shipment.retrieve('shp_').then(s => {
  //   s.buy(s.lowestRate(), 249.99).then(console.log);
  // });