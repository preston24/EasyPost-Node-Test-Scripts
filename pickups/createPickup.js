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

const address = 'adr_7ba4ea6e8ff848eabddcd923a784da8c'
const shipment = 'shp_6f2c57c17e184e6bbe61b3b49c8c9d39';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2019-08-08 09:00:00',
    max_datetime: '2019-08-08 17:00:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
});

pickup.save().then(console.log).catch(console.log);