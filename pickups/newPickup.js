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

const address = 'adr_7919300bb0444c9d890f2585438289a0'
const shipment = 'shp_ee0003a1570c49be910c3e60ded9e663';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2019-03-30 10:30:00',
    max_datetime: '2019-04-02 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
});

pickup.save().then(console.log).catch(console.log);