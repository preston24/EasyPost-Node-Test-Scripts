require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



// const trackArray = ['EZ1000000001', 'EZ4000000004', 'EZ7000000007']

const tracker1 = new api.Tracker({
  // tracking_code: trackArray[1],
  tracking_code: 'JVGL0351390000138639',
  carrier: 'DHLExpress'
});


tracker1.save().then(console.log).catch(console.log);