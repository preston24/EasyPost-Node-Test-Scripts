require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);




api.Order.retrieve('order_8e1c8a5a1026413baa91fb3865ca51f1').then(order => {
    order.buy('DHLExpress', 'ExpressWorldwideNonDoc').then(console.log).catch(console.error)
});