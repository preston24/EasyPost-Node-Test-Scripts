require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.personalTestKey;
// const apiKey = process.env.personalProdKey;


const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============

const ship = 

//=========================================================================================================================


// DELETES ALL THE UNESSCESARY ATTRIBUTES
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

delete ship.return_address.id
delete ship.return_address.created_at
delete ship.return_address.mode
delete ship.return_address.updated_at

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
    return_address: ship.return_address,
    parcel: ship.parcel,
    customs_info: ship.customs_info,
    options: ship.options,
    // reference: 'Testing UPS MI Label Sizes',
    // is_return: true,
    // service: 'express48large',
    // carrier_accounts: [process.env.USPS],
    carrier_accounts: ['ca_42aacf9b4fd0470b9a03d9b483a2323a'],
});

// shipment.save().then(console.log).catch(console.log);

shipment.save().then(s => {
  console.log(s.rates)
  console.log(s.messages);
  console.log(s.id);
  console.log(s.usps_zone);
  // console.log(s.postage_label); // for one-call buys
}).catch(console.log);




//============buy shipment by lowest rate============
// shipment.save().then(s => {
//   s.buy(s.lowestRate()).then(console.log).catch(console.log);
//  }).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'Priority')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_ad09b655261c49bc94d5be1c511b85cc').then(s => {
//   s.buy('rate_b5c39c0525574e3581141fa3717690c1').then(console.log).catch(x => {console.log(JSON.stringify(x))});
// }).catch(console.log);