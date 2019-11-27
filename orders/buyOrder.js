require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);




api.Order.retrieve('order_b9f359b444824f24b471eee6385a2109').then(order => {
    order.buy('Purolator', 'PurolatorGround').then(console.log).catch(console.log)
}).catch(console.log);


// api.Order.retrieve('order_e6ad30342de44796bee2a4295e40d915').then(o => console.log(o)).catch(console.log);















