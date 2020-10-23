require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

///////////////////////////ADD SHIPMENTS TO A BATCH////////////////////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: ['shp_fce862db1c05497eb25d5aa048fe55a7'],
// });

// batch.save().then(console.log).catch(console.log);

////////////////////ADD SHIPMENTS TO BATCH USING AN ARRAY OF OBJECTS/////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: [{id: 'shp_d82d1005ba3a4caea7529d44f99fb0ec'}, {id: 'shp_e9cda3f814ad4120b8cb0274b7e9469b'}]
//   });

// batch.save().then(console.log).catch(console.log);


///////////////////RETRIEVE A BATCH AND SCANFORM/////////////////////////////////////////////////////////////////////////////////

api.Batch.retrieve('batch_1cac849a160a4d0fb7cd3e3ceb2fc1dd').then(b => {
     b.createScanForm().then(console.log);
   });