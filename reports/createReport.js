require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

const report = new api.Report({
  type: 'shipment',
  start_date: '2020-06-14',
  end_date: '2020-07-17'
});
report.save().then(console.log);