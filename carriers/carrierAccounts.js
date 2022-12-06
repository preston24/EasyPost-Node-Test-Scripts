require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;


// const apiKey = process.env.personalProdKey;
const api = new Easypost(apiKey);

//list all carrier accounts
// api.CarrierAccount.all().then(console.log);

//retrieve specific carrier account by ID
// api.CarrierAccount.retrieve('ca_...').then(console.log);

//update carrier account
api.CarrierAccount.retrieve('ca_0ad45cab34a1405a8ca4bfbd300941d1').then((ca) => {
  ca.credentials['account_number'] = '12345'
  ca.save().then(console.log);
}).catch(console.log);