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
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
            },
        }),
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
            },
        }),
    ],
    // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
    carrier_accounts: [ {"id":"ca_bb4b66b0ff1d4784abe63c81dce69ef7"}],
});

order.save().then(console.log).catch(console.log);