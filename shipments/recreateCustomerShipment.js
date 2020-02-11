require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {
  "created_at": "2020-02-10T19:45:01Z",
  "is_return": false,
  "messages": [],
  "mode": "test",
  "options": {
    "currency": "USD",
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": null,
  "status": "unknown",
  "tracking_code": null,
  "updated_at": "2020-02-10T19:45:01Z",
  "batch_id": null,
  "batch_status": null,
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_d62b3db1370a4bdfa2daccbfddf7028b",
    "object": "Address",
    "created_at": "2020-02-10T19:44:59Z",
    "updated_at": "2020-02-10T19:44:59Z",
    "name": null,
    "company": "Global O-Ring and Seal LLC",
    "street1": "14450 John F Kennedy Blvd",
    "street2": "",
    "city": "Houston",
    "state": "TX",
    "zip": "77032",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": "order_e77f0c6a21a348fda83b29a5b63c632d",
  "parcel": {
    "id": "prcl_44b166703a7b42ba92bba8d87664e90f",
    "object": "Parcel",
    "created_at": "2020-02-10T19:45:00Z",
    "updated_at": "2020-02-10T19:45:00Z",
    "length": null,
    "width": null,
    "height": null,
    "predefined_package": null,
    "weight": 1,
    "mode": "test"
  },
  "postage_label": null,
  "refund_status": null,
  "scan_form": null,
  "selected_rate": null,
  "tracker": null,
  "to_address": {
    "id": "adr_cfe7830c9a294aba8b8afe36956477da",
    "object": "Address",
    "created_at": "2020-02-10T19:45:01Z",
    "updated_at": "2020-02-10T19:45:01Z",
    "name": null,
    "company": null,
    "street1": "Mihai Bravu nr. 5",
    "street2": "",
    "city": "Bucharest",
    "state": "Bucharest",
    "zip": "551803",
    "country": "RO",
    "phone": null,
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": null,
  "return_address": {
    "id": "adr_d62b3db1370a4bdfa2daccbfddf7028b",
    "object": "Address",
    "created_at": "2020-02-10T19:44:59Z",
    "updated_at": "2020-02-10T19:44:59Z",
    "name": null,
    "company": "Global O-Ring and Seal LLC",
    "street1": "14450 John F Kennedy Blvd",
    "street2": "",
    "city": "Houston",
    "state": "TX",
    "zip": "77032",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_cfe7830c9a294aba8b8afe36956477da",
    "object": "Address",
    "created_at": "2020-02-10T19:45:01Z",
    "updated_at": "2020-02-10T19:45:01Z",
    "name": null,
    "company": null,
    "street1": "Mihai Bravu nr. 5",
    "street2": "",
    "city": "Bucharest",
    "state": "Bucharest",
    "zip": "551803",
    "country": "RO",
    "phone": null,
    "email": null,
    "mode": "test",
    "carrier_facility": null,
    "residential": null,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-02-10T19:45:02Z",
      "updated_at": "2020-02-10T19:45:02Z",
      "mode": "test",
      "service": "ExpressMailInternational",
      "carrier": "USPS",
      "rate": "66.41",
      "currency": "USD",
      "retail_rate": "69.90",
      "retail_currency": "USD",
      "list_rate": "66.41",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_b9e193b1310e4430b83cd27459bf5aa8",
      "carrier_account_id": "ca_0b5248b8bcbb4bbcbe1f0c60dfafa418",
      "id": "rate_91182ca87aae4a89a5bc4f0563e88ab5"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T19:45:02Z",
      "updated_at": "2020-02-10T19:45:02Z",
      "mode": "test",
      "service": "FirstClassPackageInternationalService",
      "carrier": "USPS",
      "rate": "14.49",
      "currency": "USD",
      "retail_rate": "15.25",
      "retail_currency": "USD",
      "list_rate": "14.49",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_b9e193b1310e4430b83cd27459bf5aa8",
      "carrier_account_id": "ca_0b5248b8bcbb4bbcbe1f0c60dfafa418",
      "id": "rate_3ec6a6a4b93746aa8316344413afbe38"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T19:45:02Z",
      "updated_at": "2020-02-10T19:45:02Z",
      "mode": "test",
      "service": "PriorityMailInternational",
      "carrier": "USPS",
      "rate": "52.01",
      "currency": "USD",
      "retail_rate": "54.75",
      "retail_currency": "USD",
      "list_rate": "52.01",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_b9e193b1310e4430b83cd27459bf5aa8",
      "carrier_account_id": "ca_0b5248b8bcbb4bbcbe1f0c60dfafa418",
      "id": "rate_2414f0837b614c8e91dbd225fbba7fdd"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T19:45:02Z",
      "updated_at": "2020-02-10T19:45:02Z",
      "mode": "test",
      "service": "Expedited",
      "carrier": "UPS",
      "rate": "122.88",
      "currency": "USD",
      "retail_rate": "116.99",
      "retail_currency": "USD",
      "list_rate": "122.88",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_b9e193b1310e4430b83cd27459bf5aa8",
      "carrier_account_id": "ca_f5101041f15741e981fe1bc5d6e6314c",
      "id": "rate_74dd2dc7305745319f90ee2657cb70cf"
    },
    {
      "object": "Rate",
      "created_at": "2020-02-10T19:45:02Z",
      "updated_at": "2020-02-10T19:45:02Z",
      "mode": "test",
      "service": "UPSSaver",
      "carrier": "UPS",
      "rate": "179.95",
      "currency": "USD",
      "retail_rate": "189.38",
      "retail_currency": "USD",
      "list_rate": "179.95",
      "list_currency": "USD",
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": false,
      "est_delivery_days": null,
      "shipment_id": "shp_b9e193b1310e4430b83cd27459bf5aa8",
      "carrier_account_id": "ca_f5101041f15741e981fe1bc5d6e6314c",
      "id": "rate_9d41d33e5ce04955ab3e732c1fcdebf6"
    }
  ],
  "forms": [],
  "fees": [],
  "id": "shp_b9e193b1310e4430b83cd27459bf5aa8"
}


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
    carrier_accounts: ['ca_73e8527659224c7c9981784bf7ec6b5f'],
})

shipment.save().then(console.log).catch(console.log);


//============buy shipment by lowest rate============
// shipment.save().then(buyShipment => {
//   shipment.buy(shipment.lowestRate())
//     .then(console.log).catch(console.log);
// }).catch(console.log);

//============buy shipment by carrier name/service type============
// shipment.save().then(buyShipment => {
//   shipment.buy('USPS', 'Priority')
//     .then(console.log).catch(console.log);
// }).catch(console.log);

// ============buy shipment by ID============
// api.Shipment.retrieve('shp_64206b6975ab48a2ae42bc44c2d1afc7').then(s => {
//   s.buy('rate_73af7f77b455457084460f32f46a3d47').then(console.log).catch(console.log);
// }).catch(console.log);