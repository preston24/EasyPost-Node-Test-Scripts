require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);





// const address = new api.Address({
//     name: 'EasyPost',
//     street1: 'Ferris Dr 6410',
//     city: 'Houston',
//     state: 'TX',
//     zip: '77081',
//     phone: '5481855189',
// });

const address = 'adr_811893dfaee04090b2630cd34ca74860'
const shipment = 'shp_185786ef365b4ad182674af82952d411';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'Pickup Testing',
    min_datetime: '2021-09-20 08:00:00',
    max_datetime: '2021-09-20 12:00:00',
    is_account_address: false,
    instructions: 'This is a test',
});

pickup.save().then(console.log).catch(console.log);