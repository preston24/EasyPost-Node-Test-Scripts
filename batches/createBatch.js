require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

///////////////////////////ADD SHIPMENTS TO A BATCH////////////////////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: ['shp_c56d0a5e8674438e8de521b3121f7afc', 'shp_12b9b4e0385449739af32fb20e5bea01'],
// });

// batch.save().then(console.log).catch(console.log);

////////////////////ADD SHIPMENTS TO BATCH USING AN ARRAY OF OBJECTS/////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: [{id: 'shp_d82d1005ba3a4caea7529d44f99fb0ec'}, {id: 'shp_e9cda3f814ad4120b8cb0274b7e9469b'}]
//   });

// batch.save().then(console.log).catch(console.log);


///////////////////RETRIEVE A BATCH AND SCANFORM/////////////////////////////////////////////////////////////////////////////////

// api.Batch.retrieve('batch_5c830bca9341410eb080d7c5f3b6cbfe').then(b => {
//      b.createScanForm().then(console.log);
//    });