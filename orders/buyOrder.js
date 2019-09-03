require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);




api.Order.retrieve('order_77ef36de215a4d84aa722f10583d3215').then(order => {
    order.buy('Canpar', 'Ground').then(console.log).catch(console.log)
}).catch(console.log);


// api.Order.retrieve('order_e6ad30342de44796bee2a4295e40d915').then(o => console.log(o)).catch(console.log);















