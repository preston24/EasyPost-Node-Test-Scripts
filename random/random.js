require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// Covert label from PNG to ZPL 

// api.Shipment.retrieve('shp_952eff7c619e42e2994186ca25cb604e').then(shipment => {
//     shipment.convertLabelFormat('ZPL').then(console.log);
//   });



// shp_f1c14952cdf64d7d9ffc8925057cba48
// shp_d73abc5ecd2347ebb4d581bfd390979a

// const shipment_manifest = ['shp_d73abc5ecd2347ebb4d581bfd390979a', 'shp_f1c14952cdf64d7d9ffc8925057cba48'];



const scanForm = new api.ScanForm({
    shipments: ['shp_d73abc5ecd2347ebb4d581bfd390979a', 'shp_f1c14952cdf64d7d9ffc8925057cba48']
  });
  
  scanForm.save().then(console.log).catch(console.log);