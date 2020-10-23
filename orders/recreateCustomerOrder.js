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


// Delete order address data
delete data.to_address.id
delete data.to_address.mode
delete data.to_address.verifications
delete data.to_address.updated_at
delete data.to_address.created_at
delete data.to_address.carrier_facility
delete data.from_address.id
delete data.from_address.mode
delete data.from_address.verifications
delete data.from_address.created_at
delete data.from_address.updated_at

// Delete all shipment id's, usps_zone's, tracker's, and parcel's
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

  // Delete all shipments customs data
  if (data.shipments[i].customs_info) {
      delete data.shipments[i].customs_info.id
      delete data.shipments[i].customs_info.mode
      delete data.shipments[i].customs_info.created_at
      delete data.shipments[i].customs_info.updated_at
      for (ii = 0; ii < data.shipments[i].customs_info.customs_items.length; ii++) {
          delete data.shipments[i].customs_info.customs_items[ii].id
          delete data.shipments[i].customs_info.customs_items[ii].mode
          delete data.shipments[i].customs_info.customs_items[ii].created_at
          delete data.shipments[i].customs_info.customs_items[ii].updated_at
          delete data.shipments[i].customs_info.customs_items[ii].currency
      }
  }
}

// Recreate the order
const order = new api.Order({
  to_address: data.to_address,
  from_address: data.from_address,
  shipments: data.shipments,
  options: data.options,
  customs_info: data.customs_info,
  // is_return: true,
  carrier_accounts: [{ id: process.env.FEDEX }],
});

// Print the results to console
console.log("//===============================================================//");
order.save().then(console.log).catch(console.log);