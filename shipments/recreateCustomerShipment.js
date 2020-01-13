require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = 

//=========================================================================================================================

delete ship.to_address.id
delete ship.to_address.mode
delete ship.to_address.updated_at
delete ship.to_address.created_at
delete ship.to_address.carrier_facility
delete ship.from_address.id
delete ship.from_address.created_at
delete ship.from_address.mode
delete ship.from_address.updated_at
delete ship.parcel.id
delete ship.parcel.created_at
delete ship.parcel.mode
delete ship.parcel.updated_at

if (ship.parcel.predefined_package === null) {
  delete ship.parcel.predefined_package
};

if (ship.customs_info) {
delete ship.customs_info.id
delete ship.customs_info.created_at
delete ship.customs_info.mode
delete ship.customs_info.updated_at
for (i = 0; i < ship.customs_info.customs_items.length; i++) {
  delete ship.customs_info.customs_items[i].id
  delete ship.customs_info.customs_items[i].created_at
  delete ship.customs_info.customs_items[i].mode
  delete ship.customs_info.customs_items[i].updated_at
  if(ship.customs_info.customs_items[i].currency === null) {
    delete ship.customs_info.customs_items[i].currency
  }
 }
}



const shipment = new api.Shipment({
    to_address: ship.to_address,
    from_address: ship.from_address,
    parcel: ship.parcel,
    customs_info: ship.customs_info,
    options: ship.options,
    // reference: 'blah',
    // is_return: true,
    carrier_accounts: [process.env.USPS],
})

// shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
shipment.save().then(buyShipment => {
  shipment.buy(shipment.lowestRate())
    .then(console.log).catch(console.log);
}).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'Priority')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_df3f7b4efbe148fd92bc2d81988e8d98').then(s => {
//   s.buy('rate_eb25fca6455a4d66a5591b8d4799a95a').then(console.log).catch(console.log);
// }).catch(console.log);