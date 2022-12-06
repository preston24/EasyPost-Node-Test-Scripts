require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

///////////////////////////ADD SHIPMENTS TO A BATCH////////////////////////////////////////////////////////////////

batch = new api.Batch({
    shipments: ['shp_ab4740b51cdd4b1db7aa75a17539629f', 'shp_0fb36eba90d341968244b84b8cd86faf', 'shp_ae8fedf445b84ee7b2a4a843cdc11541'],
});

batch.save().then(console.log).catch(console.log);

////////////////////ADD SHIPMENTS TO BATCH USING AN ARRAY OF OBJECTS/////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: [{id: 'shp_d82d1005ba3a4caea7529d44f99fb0ec'}, {id: 'shp_e9cda3f814ad4120b8cb0274b7e9469b'}]
//   });

// batch.save().then(console.log).catch(console.log);


///////////////////RETRIEVE A BATCH AND SCANFORM/////////////////////////////////////////////////////////////////////////////////

// api.Batch.retrieve('batch_d40a6e5e2a3f457494fbca09e2d67be4').then(b => {
//      b.createScanForm().then(console.log);
//    });