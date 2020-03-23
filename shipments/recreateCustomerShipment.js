require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);



//============= copy shipment JSON from admin and assign it to const ship ===============
const ship = {
  "created_at": "2020-03-19T06:45:23Z",
  "is_return": false,
  "messages": [],
  "mode": "production",
  "options": {
    "invoice_number": "175987051",
    "label_format": "ZPL",
    "print_custom_1": "175987051-262377436",
    "currency": "USD",
    "print_custom": [
      {
        "name": null,
        "value": "175987051-262377436",
        "barcode": null
      }
    ],
    "payment": {
      "type": "SENDER"
    },
    "label_date": null,
    "date_advance": 0
  },
  "reference": "175987051-262377436",
  "status": "in_transit",
  "tracking_code": "1Z6V68R8YW80113334",
  "updated_at": "2020-03-20T00:05:35Z",
  "batch_id": "batch_af3c72168eb64fc8b0b800dae2d98eb9",
  "batch_status": "postage_purchased",
  "batch_message": null,
  "customs_info": null,
  "from_address": {
    "id": "adr_c67c9d36de3b4577800eda91155e05d5",
    "object": "Address",
    "created_at": "2019-05-08T22:17:15Z",
    "updated_at": "2019-05-08T22:17:15Z",
    "name": "Lulus",
    "company": "Lulus.com",
    "street1": "2505 Hollo Rd",
    "street2": "",
    "city": "Easton",
    "state": "PA",
    "zip": "18045-7874",
    "country": "US",
    "phone": "5303433545",
    "email": "sales@lulus.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "insurance": null,
  "order_id": null,
  "parcel": {
    "id": "prcl_5ed1954cf5324e2a85f6771707df229d",
    "object": "Parcel",
    "created_at": "2020-03-19T06:45:23Z",
    "updated_at": "2020-03-19T06:45:23Z",
    "length": null,
    "width": null,
    "height": null,
    "predefined_package": null,
    "weight": 55,
    "mode": "production"
  },
  "postage_label": {
    "object": "PostageLabel",
    "id": "pl_fb0c39138a6e4639b2d10f30b2196e85",
    "created_at": "2020-03-19T06:46:07Z",
    "updated_at": "2020-03-19T18:45:12Z",
    "date_advance": 0,
    "integrated_form": "none",
    "label_date": "2020-03-19T06:46:07Z",
    "label_resolution": 200,
    "label_size": "4x7",
    "label_type": "default",
    "label_file_type": "image/png",
    "label_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20200319/507f5990cc7a406b9943d5df4e196640.png",
    "label_pdf_url": null,
    "label_zpl_url": "https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20200319/4fe7a93b6780444b99fcec9e88ddd6da.zpl",
    "label_epl2_url": null,
    "label_file": null
  },
  "refund_status": null,
  "scan_form": null,
  "selected_rate": {
    "id": "rate_04e2d9077468460d85db00d4e7c9dc30",
    "object": "Rate",
    "created_at": "2020-03-19T06:46:07Z",
    "updated_at": "2020-03-19T06:46:07Z",
    "mode": "production",
    "service": "SurePostOver1Lb",
    "carrier": "UPSSurePost",
    "rate": "7.53",
    "currency": "USD",
    "retail_rate": null,
    "retail_currency": null,
    "list_rate": null,
    "list_currency": null,
    "delivery_days": null,
    "delivery_date": null,
    "delivery_date_guaranteed": null,
    "est_delivery_days": null,
    "shipment_id": "shp_c3d8f59239374a3f9882686397ac85b3",
    "carrier_account_id": "ca_4d9a8295f59c4bad8fcdeec8fc73f947"
  },
  "tracker": {
    "id": "trk_d04cc4d53b304746830c5e59df95833d",
    "object": "Tracker",
    "mode": "production",
    "tracking_code": "1Z6V68R8YW80113334",
    "status": "in_transit",
    "status_detail": "departed_facility",
    "created_at": "2020-03-19T06:46:08Z",
    "updated_at": "2020-03-20T10:55:39Z",
    "signed_by": null,
    "weight": 54.4,
    "est_delivery_date": "2020-03-27T00:00:00Z",
    "shipment_id": "shp_c3d8f59239374a3f9882686397ac85b3",
    "carrier": "UPSSurePost",
    "tracking_details": [
      {
        "object": "TrackingDetail",
        "message": "Order Processed: Ready for UPS",
        "description": "Order Processed: Ready for UPS",
        "status": "pre_transit",
        "status_detail": "label_created",
        "datetime": "2020-03-19T02:46:07Z",
        "source": "UPSSurePost",
        "carrier_code": "M",
        "tracking_location": {
          "object": "TrackingLocation",
          "city": null,
          "state": null,
          "country": "US",
          "zip": null
        }
      },
      {
        "object": "TrackingDetail",
        "message": "Origin Scan",
        "description": "Origin Scan",
        "status": "in_transit",
        "status_detail": "received_at_origin_facility",
        "datetime": "2020-03-19T18:54:42Z",
        "source": "UPSSurePost",
        "carrier_code": "I",
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "Easton",
          "state": "PA",
          "country": "US",
          "zip": null
        }
      },
      {
        "object": "TrackingDetail",
        "message": "Departure Scan",
        "description": "Departure Scan",
        "status": "in_transit",
        "status_detail": "departed_facility",
        "datetime": "2020-03-20T03:58:00Z",
        "source": "UPSSurePost",
        "carrier_code": "I",
        "tracking_location": {
          "object": "TrackingLocation",
          "city": "Easton",
          "state": "PA",
          "country": "US",
          "zip": null
        }
      }
    ],
    "carrier_detail": {
      "object": "CarrierDetail",
      "service": "UPS SurePost",
      "container_type": null,
      "est_delivery_date_local": null,
      "est_delivery_time_local": null,
      "origin_location": "Easton PA US",
      "origin_tracking_location": null,
      "destination_location": "SAN JOSE CA US, 95134",
      "destination_tracking_location": null,
      "guaranteed_delivery_date": null,
      "alternate_identifier": null,
      "initial_delivery_attempt": null
    },
    "finalized": false,
    "is_return": false,
    "public_url": "https://track.easypost.com/djE6dHJrX2QwNGNjNGQ1M2IzMDQ3NDY4MzBjNWU1OWRmOTU4MzNk",
    "fees": []
  },
  "to_address": {
    "id": "adr_d24ce75233f94c7a8a77270903fb8b99",
    "object": "Address",
    "created_at": "2020-03-19T06:45:23Z",
    "updated_at": "2020-03-19T06:45:23Z",
    "name": "Diem Pham",
    "company": null,
    "street1": "1 Vista Montana",
    "street2": "Apt 5339",
    "city": "SAN JOSE",
    "state": "CA",
    "zip": "95134",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "usps_zone": 8,
  "return_address": {
    "id": "adr_c67c9d36de3b4577800eda91155e05d5",
    "object": "Address",
    "created_at": "2019-05-08T22:17:15Z",
    "updated_at": "2019-05-08T22:17:15Z",
    "name": "Lulus",
    "company": "Lulus.com",
    "street1": "2505 Hollo Rd",
    "street2": "",
    "city": "Easton",
    "state": "PA",
    "zip": "18045-7874",
    "country": "US",
    "phone": "5303433545",
    "email": "sales@lulus.com",
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "buyer_address": {
    "id": "adr_d24ce75233f94c7a8a77270903fb8b99",
    "object": "Address",
    "created_at": "2020-03-19T06:45:23Z",
    "updated_at": "2020-03-19T06:45:23Z",
    "name": "Diem Pham",
    "company": null,
    "street1": "1 Vista Montana",
    "street2": "Apt 5339",
    "city": "SAN JOSE",
    "state": "CA",
    "zip": "95134",
    "country": "US",
    "phone": null,
    "email": null,
    "mode": "production",
    "carrier_facility": null,
    "residential": false,
    "federal_tax_id": null,
    "state_tax_id": null,
    "verifications": {}
  },
  "object": "Shipment",
  "rates": [
    {
      "object": "Rate",
      "created_at": "2020-03-19T06:46:06Z",
      "updated_at": "2020-03-19T06:46:06Z",
      "mode": "production",
      "service": "SurePostOver1Lb",
      "carrier": "UPSSurePost",
      "rate": "7.53",
      "currency": "USD",
      "retail_rate": null,
      "retail_currency": null,
      "list_rate": null,
      "list_currency": null,
      "delivery_days": null,
      "delivery_date": null,
      "delivery_date_guaranteed": null,
      "est_delivery_days": null,
      "shipment_id": "shp_c3d8f59239374a3f9882686397ac85b3",
      "carrier_account_id": "ca_4d9a8295f59c4bad8fcdeec8fc73f947",
      "id": "rate_04e2d9077468460d85db00d4e7c9dc30"
    }
  ],
  "forms": [],
  "fees": [
    {
      "object": "Fee",
      "type": "LabelFee",
      "amount": "0.00000",
      "charged": true,
      "refunded": false
    }
  ],
  "id": "shp_c3d8f59239374a3f9882686397ac85b3"
}

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
    carrier_accounts: ['ca_c94828304bdd4a4789268954764e485d'],
    // service: 'globalvalue'
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
// api.Shipment.retrieve('shp_7874d286135d4e60ae32438367f0a524').then(s => {
//   s.buy('rate_23dad4dac5244b06839ac58dd1c116a0').then(console.log).catch(console.log);
// }).catch(console.log);



