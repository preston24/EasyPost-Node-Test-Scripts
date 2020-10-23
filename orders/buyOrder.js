require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);




api.Order.retrieve('order_2ae628449c2e4cffa9b0e60c148940f2').then(order => {
    order.buy('USPS', 'Priority').then(console.log).catch(console.log)
}).catch(console.log);


// api.Order.retrieve('order_0e0fded9ef7d42cfb101c12076f769f7').then(console.log).catch(o => console.log(JSON.stringify(o)));