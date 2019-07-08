require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {}

const shipment = new api.Shipment({
    to_address: ship.to_address,
    from_address: ship.from_address,
    parcel: ship.parcel,
    customs_info: ship.customs_info,
    options: ship.options,
    carrier_accounts: [process.env.UPS]
})

shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('NextDayAir')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_b3f2d0b69f0849f48913f240f5ab2204').then(s => {
//   s.buy('rate_46fcc165ccba4a2a80ffeea6a7b15e46').then(console.log).catch(console.log);
// }).catch(console.log);