require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);




api.Order.retrieve('order_0cf306f203ac4c46af4c78a526eaaa37').then(order => {
    order.buy('DHL', 'UPSSaver').then(console.log).catch(console.log)
}).catch(console.log);