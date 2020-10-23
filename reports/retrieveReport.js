require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

// retrieve list of report type
//first argument is the report type: [payment_log, refund, shipment, shipment_invoice, tracker]
// api.Report.all('shipment', { page_size: 2 }).then(console.log);


//retrieve report by ID
api.Report.retrieve('cfrep_f3bc26fcf3e74f058db890e99ccb9814').catch(console.log).then(console.log);