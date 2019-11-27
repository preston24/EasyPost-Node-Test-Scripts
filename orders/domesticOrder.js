require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
  company: 'Stark Tower',
  name: 'Tony Stark',
  street1: '200 Park Ave',
  // street2: '',
  city: 'New York',
  state: 'NY',
  zip: '10079',
  country: 'US',
  phone: '8012220000',
  email: 'email@email.com',
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
});


const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                // id: 'prcl_3ac7a76d57fd4927a2aa5ad75fbc637c'
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                // id: 'prcl_2d79d00b2a0449ee89f5a40b470f7338'
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                // id: 'prcl_25ac1d6f51a9433fa831005dc7091eab'
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                // id: 'prcl_86b7cb54192a4bc380a3af9f44116e83'
            },
        }),
    ],
    // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
    carrier_accounts: [ {"id":"ca_bb4b66b0ff1d4784abe63c81dce69ef7"}],
});

order.save().then(console.log).catch(console.log);