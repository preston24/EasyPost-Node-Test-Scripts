require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;


const apiKey = process.env.personalProdKey;
const api = new Easypost(apiKey);

//list all carrier accounts
// api.CarrierAccount.all().then(console.log);

//retrieve specific carrier account by ID
// api.CarrierAccount.retrieve('ca_...').then(console.log);

//update carrier account
api.CarrierAccount.retrieve('ca_719c4da8af8f45658aedabe96beeb3ff').then((ca) => {
  ca.credentials['corporate_first_name'] = 'Name'
  ca.save().then(console.log);
}).catch(console.log);