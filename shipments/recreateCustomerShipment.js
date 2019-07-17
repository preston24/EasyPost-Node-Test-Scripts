require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {}



delete ship.to_address.id
delete ship.to_address.mode
delete ship.to_address.updated_at
delete ship.to_address.created_at
delete ship.from_address.id
delete ship.from_address.created_at
delete ship.from_address.mode
delete ship.from_address.updated_at
delete ship.parcel.id
delete ship.parcel.created_at
delete ship.parcel.mode
delete ship.parcel.updated_at
if(ship.customs_info){
delete ship.customs_info.id
delete ship.customs_info.created_at
delete ship.customs_info.mode
delete ship.customs_info.updated_at
for(i = 0; i < ship.customs_info.customs_items.length; i++){
  delete ship.customs_info.customs_items[i].id
  delete ship.customs_info.customs_items[i].created_at
  delete ship.customs_info.customs_items[i].mode
  delete ship.customs_info.customs_items[i].updated_at
 }
}

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
// api.Shipment.retrieve('shp_91d4c67853904f20a4fa10792dc1b6d8').then(s => {
//   s.buy('rate_e40642b6457f44aa90b301943cd7834c').then(console.log).catch(console.log);
// }).catch(console.log);