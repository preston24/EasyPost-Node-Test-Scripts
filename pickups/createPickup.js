require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
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

const address = 'adr_56b4cbe098be4d17a43f7d35a200d4ff'
const shipment = 'shp_cce2427917374a7fa52b33d32e08ddcb';

const pickup = new api.Pickup({
    address,
    shipment,
    reference: 'Isreal pickup',
    min_datetime: '2020-09-02 13:00:00',
    max_datetime: '2020-09-02 16:00:00',
    is_account_address: false,
    instructions: 'This is a test',
});

pickup.save().then(console.log).catch(console.log);