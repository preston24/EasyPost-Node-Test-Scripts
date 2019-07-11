require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {}

const shipment = new api.Shipment({
    to_address: ship.to_address,
    from_address: ship.from_address,
    parcel: ship.parcel,
    customs_info: ship.customs_info,
    options: ship.options,
    carrier_accounts: [process.env.FedEx]
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
// api.Shipment.retrieve('shp_1d2b33a27adc4198a0a740bca2c17009').then(s => {
//   s.buy('rate_0b95ca0436c24323827cefaef0405884').then(console.log).catch(console.log);
// }).catch(console.log);