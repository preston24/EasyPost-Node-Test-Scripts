require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// ===============Covert label from PNG to ZPL====================
// api.Shipment.retrieve('shp_cfeb59c6245242f282f3e21960cb040a').then(shipment => {
//     shipment.convertLabelFormat('ZPL').then(console.log);
//   }).catch(console.log);



// const scanForm = new api.ScanForm({
//     shipments: ['shp_d27ecd8eebe5412dac56aaaa124fb0da']
//   });
  
//   scanForm.save().then(console.log).catch(console.log);





// const user = new api.User({
//   name: 'Test Child',
// })

// user.save().then(u => console.log(u.id));



api.CarrierAccount.retrieve('').then(console.log).catch(console.log);


// api.CarrierAccount.retrieve('ca_719c4da8af8f45658aedabe96beeb3ff').then((ca) => {
//     ca.credentials['company_name'] = 'INSERT NAME'
//     ca.save().then(console.log);
//   }).catch(console.log);


  // api.User.retrieve('').then(console.log).catch(console.log);