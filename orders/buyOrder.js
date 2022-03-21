require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);




api.Order.retrieve('order_d52c4f8d967d45c4aa533f31a41b72bf').then(order => {
    order.buy('DHLExpress', 'ExpressWorldwideNonDoc').then(console.log).catch(console.log)
}).catch(console.log);


// api.Order.retrieve('order_0e0fded9ef7d42cfb101c12076f769f7').then(console.log).catch(o => console.log(JSON.stringify(o)));