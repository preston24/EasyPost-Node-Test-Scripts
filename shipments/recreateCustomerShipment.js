require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {}


const shipment = new api.Shipment({
    to_address: ship.to_address,
    from_address: ship.from_address,
    parcel: ship.parcel,
    options: ship.options
})

shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('NextDayAir')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_...').then(s => {
//   s.buy('rate_...').then(console.log);
// });