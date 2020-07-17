require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



api.Shipment.retrieve('shp_0940618be2d9473180c089cbcddaef69').then(s => {
    s.refund(console.log(s)).then(console.log).catch(console.log);
}).catch(console.log);