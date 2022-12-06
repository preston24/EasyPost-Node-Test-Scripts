require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



const trackArray = ['EZ1000000001', 'EZ4000000002', 'EZ7000000003', 'EZ7000000004', 'EZ7000000005', 'EZ7000000006', 'EZ7000000007']

const tracker1 = new api.Tracker({
  // tracking_code: trackArray[0],
  tracking_code: '390270061206',
  carrier: 'FedEx'
});


tracker1.save().then(console.log).catch(console.log);


//This will log everything, meaning the "tracking_location: [Object]" will be the full object.
// tracker1.save().then(r => {console.log(JSON.stringify(r))}).catch(console.log);