require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;

// const apiKey = process.env.personalTestKey
const api = new Easypost(apiKey);



  const toAddress = new api.Address({
  company: 'THE TEST MCTESTFACE CO.',
  name: 'MR. TEST MCTESTFACE',
  street1: '721 Government St',
  // street2: '',
  city: 'Victoria',
  state: 'BC',
  zip: 'V8W 1W5',
  country: 'CA',
  phone: '6135699941',
  
 

  // company: 'McDonalds',
  // street1: ' 600 George St',
  // city: 'Sydney',
  // state: 'NSW',
  // zip: '2000',
  // country: 'AU',
  // phone: '+61292641661',
  // email: 'email@email.com'


  // company: 'McDonalds',
  // street1: '357 Av. de la Constitución',
  // city: 'San Juan',
  // state: 'PR',
  // zip: '00918',
  // country: 'PR',
  // phone: '+61292641661',
  // email: 'email@email.com'
  
  // name: 'Monica Gustafson',
  // street1: 'Unit 8000 Box 5091',
  // city: 'DPO',
  // state: 'AP',
  // zip: '96521',
  // country: 'US',
  // phone: '2027137002',
  // email: 'mgtulip13@gmail.com',
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
  // carrier_facility: 'SLC'

  // company: 'EasyPost',
  // name: 'Mr. EP',
  // street1: '345 California St',
  // street2: 'FL 10',
  // city: 'San Francisco',
  // state: 'CA',
  // zip: '94104',
  // country: 'US',
  // phone: '8012220000',
  // email: 'email@email.com',
  // carrier_facility: 'SFO'

  // company: 'THE TESTY MCTESTFACE CO.',
  // name: 'MR. TESTY MCTESTFACE',
  // street1: '721 Government St',
  // // street2: '',
  // city: 'Victoria',
  // state: 'BC',
  // zip: 'V8W 1W5',
  // country: 'CA',
  // phone: '6135699941',
  // residential: false

  // company: 'McDonalds',
  // street1: ' 600 George St',
  // city: 'Sydney',
  // state: 'NSW',
  // zip: '2000',
  // country: 'AU',
  // phone: '+61292641661',
  // email: 'email@email.com'
});


// fromAddress.save().then(console.log).catch(console.log);

// toAddress.save().then(console.log).catch(console.log);

const customsInfo = new api.CustomsInfo({
    eel_pfc: "NOEEI 30.37(a)",
    customs_certify: true,
    customs_signer: 'The Man',
    contents_type: 'merchandise',
    restriction_type: 'none',
    // restriction_comments: '',
    // non_delivery_option: 'return',
    contents_explanation: 'Some stuff',
    declaration: 'I do declare',
    customs_items: [
        new api.CustomsItem({
            description: 'Sample good',
            quantity: 1,
            weight: 9,
            value: 2600,
            // hs_tariff_number: '4901.99',
            origin_country: 'US',
            // code: 'MPH0213',
            // currency: 'USD'
        }),

      new api.CustomsItem({
        description: 'Notecard_12019_Cadolia',
        quantity: 1,
        weight:0.06,
        value: 1.0,
        origin_country: 'US',
        // code: 'Notecard_12019',
    }),

    new api.CustomsItem({
      description: 'Cadolia_Labels',
      quantity: 1,
      weight: 0.06,
      value: 1.0,
      origin_country: 'US',
      // code: 'MPH0213',
  }),
      ],
});

const parcel = new api.Parcel({
    // predefined_package: 'Satchel',
    length: 1,
    width: 1,
    height: 1,
    weight: 1.0,
});

// parcel.save().then(console.log).catch(console.log);

const shipment = new api.Shipment({
    to_address: toAddress,
    from_address: fromAddress,
    parcel: parcel,
    customs_info: customsInfo,
    tax_identifiers: [
      {
        entity: "SENDER",
        tax_id: "IM2760000742",
        tax_id_type: "IOSS",
        issuing_country: "US"
      },
    ],
    // reference: 'Testing UPS MI',
    // is_return: true,
    // service: 'EconomyMailInnovations',
    options: {
    //  importer_address_id: 'adr_5919faf95aec43d4949215d07f913e16',
    //  bill_third_party_account: '12345',
    //  incoterm: 'DAP',
    //  import_federal_tax_id: 'IM2760000742',
    //  duty_payment_account: '654410658',
    //  machineable: true,
    //  commercial_invoice_format: 'PNG',
    //  freight_charge: 56.72,
    //  label_size: '4X6',
    //  label_format: "PNG",
    // carrier_insurance_amount: "550"
    //  delivery_confirmation: 'SIGNATURE',
    // suppress_etd: true
    //  hold_for_pickup: true,
    //  handling_instructions: 'These are my instructions!!!!!',
    //  print_custom_1: 'HEY THIS SHOULD BE ON THE LABEL',
    //  commercial_invoice_letterhead: 'IMAGE_1',
    //  commercial_invoice_signature: 'IMAGE_2',
    //  delivery_confirmation: 'DO_NOT_SAFE_DROP',
    //  currency: 'USD',
    //  payment: {
    //   type: 'SENDER',
    //   account: '893084290',
    //   postal_code: '84102',
    //   country: 'US'
    //  },
    //  duty_payment: {
    //    type: 'THIRD_PARTY',
    //    account: '123456',
    //    postal_code: '12345',
    //    country: 'US'
    //  },
    },
    // carrier_accounts: ['ca_abb5a58ad235459fa6dc04056f88ed7d'],
    carrier_accounts: [process.env.UPS],
});

//SOME VARIOUS WAYS TO RETURN RESPONSE BODY INFO I'VE PLAYED AROUND WITH

shipment.save().then(s => {
  console.log(s.rates)
  console.log(s.messages)
  console.log(s.id);
  // console.log(s.postage_label); // for one-call buys
}).catch(console.log);


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




// ============buy shipment by ID============
// api.Shipment.retrieve('shp_9687957fb3934de283c9dc447ca576c7').then(s => {
//   s.buy('rate_7c6eda5da6be40dda5abe0c7a8c2371b').then(console.log).catch(console.log);
// }).catch(console.log);


// ============buy shipment by lowest rate============
// shipment.save().then(s => {
//   s.buy(s.lowestRate()).then(console.log).catch(console.log);
//  });