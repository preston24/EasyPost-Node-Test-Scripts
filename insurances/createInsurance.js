require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



/* Either objects or ids can be passed in. If the object does
 * not have an id, it will be created. */
// const toAddress = new api.Address({ ... })
// const fromAddress = new api.Address({ ... })

const insurance = new api.Insurance({
    to_address: 'adr_',
    from_address: 'adr_',
    tracking_code: '',
    carrier: '',
    amount: '100.00',
    reference: 'insuranceRef1'
});

insurance.save().then(console.log).catch(console.log);