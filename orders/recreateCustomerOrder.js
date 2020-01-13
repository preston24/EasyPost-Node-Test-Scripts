require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


//============= copy o.ent JSON from admin and assign it to const o.===============
const o = {
    "object": "Order",
    "public_id": "order_f1e240c8f8474b8f824d7b234a35aba3",
    "user": {
      "id": 463612,
      "public_id": "user_70537066d7be48e1ae48734fa0f63add",
      "object": "User",
      "parent_id": null,
      "billing_user_id": 463612,
      "name": "Aleli Lam",
      "email": "alam@nemcorinc.com",
      "phone_number": "519-740-0595",
      "balance": "$99.94000",
      "price_per_shipment": "0.01000",
      "disabled": false,
      "disabled_at": null,
      "created_at": "2019-05-03T13:45:14Z",
      "updated_at": "2019-05-03T18:27:21Z",
      "watch": false,
      "source": null,
      "stripe_customer": {
        "id": 15142
      },
      "user_flag": {
        "id": 101345
      }
    },
    "user_id": 463612,
    "mode": "production",
    "is_return": false,
    "reference": null,
    "options": {
      "currency": "USD",
      "payment": {
        "type": "SENDER"
      },
      "label_date": null
    },
    "messages": [],
    "created_at": "2019-12-17T08:59:19Z",
    "updated_at": "2019-12-17T08:59:19Z",
    "from_address": {
      "id": "adr_654b0dd963284bdab3e8d0ab553feeee",
      "object": "Address",
      "created_at": "2019-12-17T08:59:18Z",
      "updated_at": "2019-12-17T08:59:18Z",
      "name": "",
      "company": "NEMCOR MAIN WAREHOUSE",
      "street1": "501 Franklin Blvd",
      "street2": "",
      "city": "Cambridge",
      "state": "ON",
      "zip": "N1R 8G9",
      "country": "CA",
      "phone": "5197400595",
      "email": "",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": []
    },
    "from_address_id": 4047918747,
    "to_address": {
      "id": "adr_15b0d63b35424737842e07dc89b47ff9",
      "object": "Address",
      "created_at": "2019-12-17T08:59:19Z",
      "updated_at": "2019-12-17T08:59:19Z",
      "name": "5148272170",
      "company": "Daniele Daher",
      "street1": "11275 rue Gilles-Villeneuve",
      "street2": "",
      "city": "MIRABEL",
      "state": "QC",
      "zip": "J7J 1T8",
      "country": "CA",
      "phone": "9058212111",
      "email": "",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": []
    },
    "to_address_id": 4047918760,
    "buyer_address": {
      "id": "adr_15b0d63b35424737842e07dc89b47ff9",
      "object": "Address",
      "created_at": "2019-12-17T08:59:19Z",
      "updated_at": "2019-12-17T08:59:19Z",
      "name": "5148272170",
      "company": "Daniele Daher",
      "street1": "11275 rue Gilles-Villeneuve",
      "street2": "",
      "city": "MIRABEL",
      "state": "QC",
      "zip": "J7J 1T8",
      "country": "CA",
      "phone": "9058212111",
      "email": "",
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": []
    },
    "buyer_address_id": 4047918760,
    "return_address": {
      "id": "adr_69f0cf678ae84534a657f0c737e4eb0a",
      "object": "Address",
      "created_at": "2019-12-17T08:59:19Z",
      "updated_at": "2019-12-17T08:59:19Z",
      "name": null,
      "company": "Walmart.ca",
      "street1": "6175 Edwards Boulevard",
      "street2": "Unit 1",
      "city": "Mississauga",
      "state": "ON",
      "zip": "L5T 2W7",
      "country": "CA",
      "phone": "18003280402",
      "email": null,
      "mode": "production",
      "carrier_facility": null,
      "residential": null,
      "federal_tax_id": null,
      "state_tax_id": null,
      "verifications": []
    },
    "return_address_id": 4047918767,
    "customs_info": null,
    "customs_info_id": null,
    "id": 105486582,
    "shipments": [
      {
        "created_at": "2019-12-17T08:59:19Z",
        "is_return": false,
        "messages": [],
        "mode": "production",
        "options": {
          "label_size": "4X6",
          "bill_third_party_account": "0007311722",
          "bill_third_party_country": "",
          "bill_third_party_postal_code": "",
          "currency": "USD",
          "payment": {
            "type": "THIRD_PARTY",
            "account": "0007311722",
            "postal_code": "",
            "country": ""
          },
          "duty_payment": {
            "account": "0007311722",
            "country": "",
            "postal_code": "",
            "type": "THIRD_PARTY"
          },
          "label_date": null,
          "date_advance": 0
        },
        "reference": "LP00705",
        "status": "unknown",
        "tracking_code": null,
        "updated_at": "2019-12-17T08:59:19Z",
        "batch_id": null,
        "batch_status": null,
        "batch_message": null,
        "customs_info": null,
        "from_address": {
          "id": "adr_654b0dd963284bdab3e8d0ab553feeee",
          "object": "Address",
          "created_at": "2019-12-17T08:59:18Z",
          "updated_at": "2019-12-17T08:59:18Z",
          "name": "",
          "company": "NEMCOR MAIN WAREHOUSE",
          "street1": "501 Franklin Blvd",
          "street2": "",
          "city": "Cambridge",
          "state": "ON",
          "zip": "N1R 8G9",
          "country": "CA",
          "phone": "5197400595",
          "email": "",
          "mode": "production",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "insurance": null,
        "order_id": "order_f1e240c8f8474b8f824d7b234a35aba3",
        "parcel": {
          "id": "prcl_cce5c296a6e144f5ba7186b574bfa428",
          "object": "Parcel",
          "created_at": "2019-12-17T08:59:19Z",
          "updated_at": "2019-12-17T08:59:19Z",
          "length": 4.5,
          "width": 7.5,
          "height": 10.5,
          "predefined_package": null,
          "weight": 1.25,
          "mode": "production"
        },
        "postage_label": null,
        "refund_status": null,
        "scan_form": null,
        "selected_rate": null,
        "tracker": null,
        "to_address": {
          "id": "adr_15b0d63b35424737842e07dc89b47ff9",
          "object": "Address",
          "created_at": "2019-12-17T08:59:19Z",
          "updated_at": "2019-12-17T08:59:19Z",
          "name": "5148272170",
          "company": "Daniele Daher",
          "street1": "11275 rue Gilles-Villeneuve",
          "street2": "",
          "city": "MIRABEL",
          "state": "QC",
          "zip": "J7J 1T8",
          "country": "CA",
          "phone": "9058212111",
          "email": "",
          "mode": "production",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "usps_zone": null,
        "return_address": {
          "id": "adr_69f0cf678ae84534a657f0c737e4eb0a",
          "object": "Address",
          "created_at": "2019-12-17T08:59:19Z",
          "updated_at": "2019-12-17T08:59:19Z",
          "name": null,
          "company": "Walmart.ca",
          "street1": "6175 Edwards Boulevard",
          "street2": "Unit 1",
          "city": "Mississauga",
          "state": "ON",
          "zip": "L5T 2W7",
          "country": "CA",
          "phone": "18003280402",
          "email": null,
          "mode": "production",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "buyer_address": {
          "id": "adr_15b0d63b35424737842e07dc89b47ff9",
          "object": "Address",
          "created_at": "2019-12-17T08:59:19Z",
          "updated_at": "2019-12-17T08:59:19Z",
          "name": "5148272170",
          "company": "Daniele Daher",
          "street1": "11275 rue Gilles-Villeneuve",
          "street2": "",
          "city": "MIRABEL",
          "state": "QC",
          "zip": "J7J 1T8",
          "country": "CA",
          "phone": "9058212111",
          "email": "",
          "mode": "production",
          "carrier_facility": null,
          "residential": null,
          "federal_tax_id": null,
          "state_tax_id": null,
          "verifications": {}
        },
        "object": "Shipment",
        "_internal": {
          "id": 1343226676,
          "public_id": "shp_6983815e3e4843adac0d3627cbf67357",
          "insurance_value_usd": null,
          "user": {
            "id": 463612,
            "public_id": "user_70537066d7be48e1ae48734fa0f63add",
            "object": "User",
            "parent_id": null,
            "billing_user_id": 463612,
            "name": "Aleli Lam",
            "email": "alam@nemcorinc.com",
            "phone_number": "519-740-0595",
            "balance": "$99.94000",
            "price_per_shipment": "0.01000",
            "disabled": false,
            "disabled_at": null,
            "created_at": "2019-05-03T13:45:14Z",
            "updated_at": "2019-05-03T18:27:21Z",
            "watch": false,
            "source": null,
            "stripe_customer": {
              "id": 15142
            },
            "user_flag": {
              "id": 101345
            }
          },
          "user_id": 463612,
          "batch_id": null,
          "to_address": {
            "id": "adr_15b0d63b35424737842e07dc89b47ff9",
            "object": "Address",
            "created_at": "2019-12-17T08:59:19Z",
            "updated_at": "2019-12-17T08:59:19Z",
            "name": "5148272170",
            "company": "Daniele Daher",
            "street1": "11275 rue Gilles-Villeneuve",
            "street2": "",
            "city": "MIRABEL",
            "state": "QC",
            "zip": "J7J 1T8",
            "country": "CA",
            "phone": "9058212111",
            "email": "",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [],
            "_internal": {
              "id": 4047918760,
              "public_id": "adr_15b0d63b35424737842e07dc89b47ff9",
              "user_id": 463612,
              "user": {
                "id": 463612,
                "public_id": "user_70537066d7be48e1ae48734fa0f63add",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 463612,
                "name": "Aleli Lam",
                "email": "alam@nemcorinc.com",
                "phone_number": "519-740-0595",
                "balance": "$99.94000",
                "price_per_shipment": "0.01000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2019-05-03T13:45:14Z",
                "updated_at": "2019-05-03T18:27:21Z",
                "watch": false,
                "source": null,
                "stripe_customer": {
                  "id": 15142
                },
                "user_flag": {
                  "id": 101345
                }
              }
            }
          },
          "to_address_id": 4047918760,
          "from_address": {
            "id": "adr_654b0dd963284bdab3e8d0ab553feeee",
            "object": "Address",
            "created_at": "2019-12-17T08:59:18Z",
            "updated_at": "2019-12-17T08:59:18Z",
            "name": "",
            "company": "NEMCOR MAIN WAREHOUSE",
            "street1": "501 Franklin Blvd",
            "street2": "",
            "city": "Cambridge",
            "state": "ON",
            "zip": "N1R 8G9",
            "country": "CA",
            "phone": "5197400595",
            "email": "",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [],
            "_internal": {
              "id": 4047918747,
              "public_id": "adr_654b0dd963284bdab3e8d0ab553feeee",
              "user_id": 463612,
              "user": {
                "id": 463612,
                "public_id": "user_70537066d7be48e1ae48734fa0f63add",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 463612,
                "name": "Aleli Lam",
                "email": "alam@nemcorinc.com",
                "phone_number": "519-740-0595",
                "balance": "$99.94000",
                "price_per_shipment": "0.01000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2019-05-03T13:45:14Z",
                "updated_at": "2019-05-03T18:27:21Z",
                "watch": false,
                "source": null,
                "stripe_customer": {
                  "id": 15142
                },
                "user_flag": {
                  "id": 101345
                }
              }
            }
          },
          "from_address_id": 4047918747,
          "return_address": {
            "id": "adr_69f0cf678ae84534a657f0c737e4eb0a",
            "object": "Address",
            "created_at": "2019-12-17T08:59:19Z",
            "updated_at": "2019-12-17T08:59:19Z",
            "name": null,
            "company": "Walmart.ca",
            "street1": "6175 Edwards Boulevard",
            "street2": "Unit 1",
            "city": "Mississauga",
            "state": "ON",
            "zip": "L5T 2W7",
            "country": "CA",
            "phone": "18003280402",
            "email": null,
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [],
            "_internal": {
              "id": 4047918767,
              "public_id": "adr_69f0cf678ae84534a657f0c737e4eb0a",
              "user_id": 463612,
              "user": {
                "id": 463612,
                "public_id": "user_70537066d7be48e1ae48734fa0f63add",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 463612,
                "name": "Aleli Lam",
                "email": "alam@nemcorinc.com",
                "phone_number": "519-740-0595",
                "balance": "$99.94000",
                "price_per_shipment": "0.01000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2019-05-03T13:45:14Z",
                "updated_at": "2019-05-03T18:27:21Z",
                "watch": false,
                "source": null,
                "stripe_customer": {
                  "id": 15142
                },
                "user_flag": {
                  "id": 101345
                }
              }
            }
          },
          "return_address_id": 4047918767,
          "buyer_address": {
            "id": "adr_15b0d63b35424737842e07dc89b47ff9",
            "object": "Address",
            "created_at": "2019-12-17T08:59:19Z",
            "updated_at": "2019-12-17T08:59:19Z",
            "name": "5148272170",
            "company": "Daniele Daher",
            "street1": "11275 rue Gilles-Villeneuve",
            "street2": "",
            "city": "MIRABEL",
            "state": "QC",
            "zip": "J7J 1T8",
            "country": "CA",
            "phone": "9058212111",
            "email": "",
            "mode": "production",
            "carrier_facility": null,
            "residential": null,
            "federal_tax_id": null,
            "state_tax_id": null,
            "verifications": [],
            "_internal": {
              "id": 4047918760,
              "public_id": "adr_15b0d63b35424737842e07dc89b47ff9",
              "user_id": 463612,
              "user": {
                "id": 463612,
                "public_id": "user_70537066d7be48e1ae48734fa0f63add",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 463612,
                "name": "Aleli Lam",
                "email": "alam@nemcorinc.com",
                "phone_number": "519-740-0595",
                "balance": "$99.94000",
                "price_per_shipment": "0.01000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2019-05-03T13:45:14Z",
                "updated_at": "2019-05-03T18:27:21Z",
                "watch": false,
                "source": null,
                "stripe_customer": {
                  "id": 15142
                },
                "user_flag": {
                  "id": 101345
                }
              }
            }
          },
          "buyer_address_id": 4047918760,
          "selected_rate": null,
          "rates": [
            {
              "id": "rate_0a4a96b4c8ae4ce7b4e7bd73f1dd9f4d",
              "carrier_account_id": 522040,
              "carrier": "CanadaPost",
              "service": "ExpeditedParcel",
              "selected": false,
              "rate_amount": "15.77"
            },
            {
              "id": "rate_a4cc3a4ef3854492b8ea4e5a6782239f",
              "carrier_account_id": 522040,
              "carrier": "CanadaPost",
              "service": "Xpresspost",
              "selected": false,
              "rate_amount": "21.11"
            }
          ],
          "postage_label": null,
          "postage_label_id": null,
          "carrier_account_id": null,
          "parcel": {
            "id": "prcl_cce5c296a6e144f5ba7186b574bfa428",
            "object": "Parcel",
            "created_at": "2019-12-17T08:59:19Z",
            "updated_at": "2019-12-17T08:59:19Z",
            "length": 4.5,
            "width": 7.5,
            "height": 10.5,
            "predefined_package": null,
            "weight": 1.25,
            "mode": "production",
            "_internal": {
              "id": 1299928405,
              "public_id": "prcl_cce5c296a6e144f5ba7186b574bfa428",
              "user": {
                "id": 463612,
                "public_id": "user_70537066d7be48e1ae48734fa0f63add",
                "object": "User",
                "parent_id": null,
                "billing_user_id": 463612,
                "name": "Aleli Lam",
                "email": "alam@nemcorinc.com",
                "phone_number": "519-740-0595",
                "balance": "$99.94000",
                "price_per_shipment": "0.01000",
                "disabled": false,
                "disabled_at": null,
                "created_at": "2019-05-03T13:45:14Z",
                "updated_at": "2019-05-03T18:27:21Z",
                "watch": false,
                "source": null,
                "stripe_customer": {
                  "id": 15142
                },
                "user_flag": {
                  "id": 101345
                }
              },
              "user_id": 463612
            }
          },
          "parcel_id": 1299928405,
          "insurance_id": null,
          "customs_info": null,
          "customs_info_id": null,
          "scan_form": null,
          "scan_form_id": null,
          "tracker": null,
          "tracker_id": null,
          "order_id": 105486582,
          "refund": null,
          "refund_id": null,
          "forms": [],
          "fees": []
        },
        "rates": [
          {
            "object": "Rate",
            "created_at": "2019-12-17T08:59:20Z",
            "updated_at": "2019-12-17T08:59:20Z",
            "mode": "production",
            "service": "ExpeditedParcel",
            "carrier": "CanadaPost",
            "rate": "15.77",
            "currency": "CAD",
            "retail_rate": null,
            "retail_currency": null,
            "list_rate": null,
            "list_currency": null,
            "delivery_days": 3,
            "delivery_date": null,
            "delivery_date_guaranteed": true,
            "est_delivery_days": 3,
            "shipment_id": "shp_6983815e3e4843adac0d3627cbf67357",
            "carrier_account_id": "ca_fcb123d7ea24410cb1d82d1e30dabda2",
            "id": "rate_0a4a96b4c8ae4ce7b4e7bd73f1dd9f4d"
          },
          {
            "object": "Rate",
            "created_at": "2019-12-17T08:59:20Z",
            "updated_at": "2019-12-17T08:59:20Z",
            "mode": "production",
            "service": "Xpresspost",
            "carrier": "CanadaPost",
            "rate": "21.11",
            "currency": "CAD",
            "retail_rate": null,
            "retail_currency": null,
            "list_rate": null,
            "list_currency": null,
            "delivery_days": 2,
            "delivery_date": null,
            "delivery_date_guaranteed": true,
            "est_delivery_days": 2,
            "shipment_id": "shp_6983815e3e4843adac0d3627cbf67357",
            "carrier_account_id": "ca_fcb123d7ea24410cb1d82d1e30dabda2",
            "id": "rate_a4cc3a4ef3854492b8ea4e5a6782239f"
          }
        ],
        "forms": [],
        "fees": [],
        "id": "shp_6983815e3e4843adac0d3627cbf67357"
      }
    ]
  }



//==================================================================================

const order = new api.Order({
    to_address: o.to_address,
    from_address: o.from_address,
    shipments: [
        new api.Shipment({
            parcel: o.shipments[0].parcel,
            options: {
                label_format: "PDF",
            },
        })
    ],
    carrier_accounts: [process.env.USPS],

})

order.save().then(console.log).catch(console.log);


// api.Order.retrieve(order.id).then(order => {
//     order.buy('USPS', 'Priority').then(console.log).catch(console.error)
// });