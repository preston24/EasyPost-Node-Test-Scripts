require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);





/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
// const address = new api.Address({
//     name: 'EasyPost',
//     street1: 'Ferris Dr 6410',
//     city: 'Houston',
//     state: 'TX',
//     zip: '77081',
//     phone: '5481855189',
// });

const address = 'adr_e4b71a2292994099acc238b9f5245943'
const shipment = 'shp_0cd355b06749452a84103bc51e9bbe3d';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-01-10 09:00:00',
    max_datetime: '2020-01-10 17:00:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
});

pickup.save().then(console.log).catch(console.log);