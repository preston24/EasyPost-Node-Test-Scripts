require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


api.User.retrieve('').then(u =>
  u.recharge_threshold = '50.00',
  u.save().catch(console.error)
);