require('dotenv').config();

var util = require('util')


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


  api.CarrierType.all().then(r => {console.log(JSON.stringify(r))}).catch(console.log);