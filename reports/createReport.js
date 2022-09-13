require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const report = new api.Report({
  type: 'shipment',
  start_date: '2022-07-01',
  end_date: '2022-07-31',
  send_email: true
});

report.save().catch(console.log).then(console.log);

// report.save().catch(console.log).then(r => {console.log(JSON.stringify(r))}).catch(console.log);