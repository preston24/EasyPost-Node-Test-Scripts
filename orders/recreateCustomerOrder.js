require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// Assign JSON data to variable
const data = (

  // ENTER JSON DATA BELOW
  //===============================================================//

{}


  //===============================================================//
);


// Delete order addresses
delete data.to_address.id
delete data.to_address.object
delete data.to_address.verifications
delete data.to_address.mode
delete data.to_address.updated_at
delete data.to_address.created_at
delete data.to_address.carrier_facility
delete data.from_address.id
delete data.from_address.object
delete data.from_address.verifications
delete data.from_address.created_at
delete data.from_address.mode
delete data.from_address.updated_at

// Delete shipment id, usps_zone, trackers, and parcels
for (i = 0; i < data.shipments.length; i++) {
  delete data.shipments[i].id
  delete data.shipments[i].usps_zone
  delete data.shipments[i].tracker
  delete data.shipments[i].parcel.id
  delete data.shipments[i].parcel.created_at
  delete data.shipments[i].parcel.mode
  delete data.shipments[i].parcel.updated_at
  if (data.shipments[i].parcel.predefined_package === null) {
    delete data.shipments[i].parcel.predefined_package
  }
}

// Delete shipment customs
for (i = 0; i < data.shipments.customs_info; i++) {
  if (data.shipments[i].customs_info) {
    delete data.shipments[i].customs_info.id
    delete data.shipments[i].customs_info.created_at
    delete data.shipments[i].customs_info.mode
    delete data.shipments[i].customs_info.updated_at
    for (i = 0; i < data.customs_info.customs_items.length; i++) {
      delete data.customs_info.customs_items[i].id
      delete data.customs_info.customs_items[i].created_at
      delete data.customs_info.customs_items[i].mode
      delete data.customs_info.customs_items[i].updated_at
      if (data.customs_info.customs_items[i].currency === null) {
        delete data.customs_info.customs_items[i].currency
      }
    }
  }
}

// Recreate the order
const order = new api.Order({
  to_address: data.to_address,
  from_address: data.from_address,
  shipments: data.shipments,
  // options: data.options,
  customs_info: data.customs_info,
  carrier_accounts: [{ id: process.env.eComm }],
});

// Print the results to console
console.log("//===============================================================//");
order.save().then(console.log).catch(console.log);