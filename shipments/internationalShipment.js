require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



  const toAddress = new api.Address({
  // company: 'THE TESTY MCTESTFACE CO.',
  // name: 'MR. TESTY MCTESTFACE',
  // street1: '721 Government St',
  // // street2: '',
  // city: 'Victoria',
  // state: 'BC',
  // zip: 'V8W 1W5',
  // country: 'CA',
  // phone: '6135699941',




  company: "Ainsley Gornall",
  name: "Ainsley Gornall",
  street1: "210 - 2255 W 1st ave",
  street2: "STEPHEN DON'T SHIP",
  city: "Vancouver",
  state: "BC",
  zip: "V6K1E9",
  country: "CA",
  phone: "4388888888",
  email: "tracking@returnmagic.com",

  
  // company: "THE TESTING CO.",
  // name: 'MR. TEST',
  // street1: '358 S 700 E',
  // street2: 'STE B',
  // city: 'Salt Lake City',
  // state: 'UT',
  // zip: '84102',
  // country: 'US',
  // phone: '4165555556',
  // email: 'TEST123@YOPMAIL.COM',
});

const fromAddress = new api.Address({
  company: "THE TESTING CO.",
  name: 'MR. TEST',
  street1: '358 S 700 E',
  street2: 'STE B',
  city: 'Salt Lake City',
  state: 'UT',
  zip: '84102',
  country: 'US',
  phone: '4165555556',
  email: 'TEST123@YOPMAIL.COM',




  // company: 'Londre Bodywear CO Hannah Todd',
  // name: 'Londre Bodywear CO Hannah Todd',
  // street1: '711 Broughton st',
  // // street2: '',
  // city: 'Vancouver',
  // state: 'BC',
  // zip: 'V6G 1Z8',
  // country: 'CA',
  // phone: '6043534440',
  // email: 'tracking@returnmagic.com'


  // // company: 'THE TESTING CO.',
  // // name: 'MR. TEST',
  // street1: '13820 NE Airport Way',
  // // street2: '',
  // city: 'Portland',
  // state: 'OR',
  // zip: '97251',
  // country: 'US',
  // // phone: '6135699941',
});


fromAddress.save().then(console.log).catch(console.log);

toAddress.save().then(console.log).catch(console.log);

const customsInfo = new api.CustomsInfo({
    // eel_pfc: "NOEEI 30.36",
    customs_certify: true,
    customs_signer: 'Sample',
    contents_type: 'merchandise',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',
    contents_explanation: 'Stuff',
    // declaration: '',
    customs_items: [
        new api.CustomsItem({
            description: 'Sample good',
            quantity: 1,
            weight: 9,
            value: 1.0,
            hs_tariff_number: '4901.99',
            origin_country: 'US',
            // code: 'MPH0213',
            // currency: 'USD'
        })],
});

const parcel = new api.Parcel({
    // predefined_package: 'Document',
    length: 10,
    width: 10,
    height: 10,
    weight: 10,
});

parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    reference: '123',
    options: {
      // bill_third_party_account: '12345'
    //  incoterm: 'DDP',
    // label_size: '4X6',
    //  label_format: "PDF",
    //  delivery_confirmation: 'SIGNATURE',
    //  hold_for_pickup: true,
    //  handling_instructions: 'These are my instructions!!!!!'
    print_custom_1: 'HEY THIS SHOULD BE ON THE LABEL'
    // commercial_invoice_letterhead: 'IMAGE_1',
    // commercial_invoice_signature: 'IMAGE_2'
    // delivery_confirmation: 'DO_NOT_SAFE_DROP'
    },
    carrier_accounts: ['ca_b892e3d3ac674d6e9ae14d074f328663'],
});

// shipment.save().then(console.log).catch(console.log);



// ============buy shipment by ID============
// api.Shipment.retrieve('shp_9687957fb3934de283c9dc447ca576c7').then(s => {
//   s.buy('rate_7c6eda5da6be40dda5abe0c7a8c2371b').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);