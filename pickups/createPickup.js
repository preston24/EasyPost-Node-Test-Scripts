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

const address = 'adr_08e7222b72a246dca163874ad4d3dc05'
const shipment = 'shp_30a0a590c9ea41779fba6970c4107242';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2020-02-26 13:00:00',
    max_datetime: '2020-02-26 16:00:00',
    is_account_address: false,
    instructions: 'Do a backflip when you arrive to pick up',
});

pickup.save().then(console.log).catch(console.log);