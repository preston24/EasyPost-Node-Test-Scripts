require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);




api.Order.retrieve('order_31eca00f1617427ba3232fba1841e663').then(order => {
    order.buy('DPDUK', 'ParcelSaturday12:00').then(console.log).catch(console.log)
}).catch(console.log);


// api.Order.retrieve('order_e6ad30342de44796bee2a4295e40d915').then(o => console.log(o)).catch(console.log);















