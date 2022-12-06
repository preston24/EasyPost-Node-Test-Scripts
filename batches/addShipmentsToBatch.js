require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


api.Batch.retrieve('batch_2121fc8b578f4a04a6486f15256dd791').then((b) =>
  b.addShipments(['shp_71533a58338940c3a738d0578dd9ff97', 'shp_ec0340d0b58a4718bd307495bd89db53', 'shp_ed32565a6f0243e7b3d0af132e3e084e', 'shp_ed32565a6f0243e7b3d0af132e3e084e']).then(console.log),
);