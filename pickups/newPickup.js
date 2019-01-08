require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);





/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */
const address = new api.Address({
    name: 'EasyPost',
    street1: 'Ferris Dr 6410',
    city: 'Houston',
    state: 'TX',
    zip: '77081',
    phone: '5481855189',
});

const shipment = 'shp_';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'my-first-pickup',
    min_datetime: '2018-7-29 10:30:00',
    max_datetime: '2018-7-30 10:30:00',
    is_account_address: false,
    instructions: 'Special pickup instructions',
});

pickup.save().then(console.log);