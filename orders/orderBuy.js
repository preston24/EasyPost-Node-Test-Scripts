require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);




api.Order.retrieve('order_7929686821f0434c8fb730daadb0a818').then(order => {
    order.buy('UPS', 'Ground').then(console.log).catch(console.error)
});