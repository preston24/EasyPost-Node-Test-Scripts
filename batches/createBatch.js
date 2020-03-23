require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);

///////////////////////////ADD SHIPMENTS TO A BATCH////////////////////////////////////////////////////////////////

batch = new api.Batch({
    shipments: ['shp_224619e370cb482c84c9e94c91a8f75e'],
});

batch.save().then(console.log).catch(console.log);

////////////////////ADD SHIPMENTS TO BATCH USING AN ARRAY OF OBJECTS/////////////////////////////////////////////////

// batch = new api.Batch({
//     shipments: [{id: 'shp_d82d1005ba3a4caea7529d44f99fb0ec'}, {id: 'shp_e9cda3f814ad4120b8cb0274b7e9469b'}]
//   });

// batch.save().then(console.log).catch(console.log);


///////////////////RETRIEVE A BATCH AND SCANFORM/////////////////////////////////////////////////////////////////////////////////

// api.Batch.retrieve('batch_360ad1aba25841388107393bdf3c8e0a').then(b => {
//      b.createScanForm().then(console.log);
//    });