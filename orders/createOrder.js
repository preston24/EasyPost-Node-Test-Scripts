require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */


// set addresses
const toAddress = new api.Address({
    // company: "",
    name: "Huraizah Adams",
    street1: "National guard king abdul aziz,",
    // street2: "P.O BOX 9515",
    city: "Jeddah",
    // state: "DF",
    // zip: "06600",
    country: "SA",
    // phone: "5215539015203",
    // id: 'adr_7a0fb697967e41a7bc77ee05bd48558a'
});

const fromAddress = new api.Address({
    // name: "baller brand",
    // street1: "Benito Juarez 2535",
    // city: "CAPITAL FEDERAL",
    // state: "CAPITAL FEDERAL",
    // zip: "1125",
    // country: "AR",
    // phone: "5491159811530",
    id: 'adr_ac1a4c3a206a461a965383422c32faf2'
});

const customsInfo = new api.CustomsInfo({
    id: 'cstinfo_bb376cbb09b0454983db0175efa65381',
    // eel_pfc: "NOEEI 30.37(a)",
    // customs_certify: false,
    // customs_signer: '',
    // contents_type: 'merchandise',
    // restriction_type: 'none',
    // restriction_comments: '',
    // non_delivery_option: 'return',
    // contents_explanation: 'T-Shirts',
    // declaration: '',
    customs_items: [
        new api.CustomsItem({
            'id': 'cstitem_05a0e0ae1e104e4faa974853c8139d47',
            // 'description': 'T-Shirts',
            // 'quantity': 1,
            // 'weight': 10.582,
            // 'value': 524.97,
            // 'hs_tariff_number': '852352',
            // 'origin_country': 'AR',
            // 'currency': 'MXN',
        })],
});


const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    customs_info: customsInfo,
    shipments: [
        new api.Shipment({
            parcel: {
                // length: 24,
                // width: 24,
                // height: 18,
                // weight: 1136,
                id: 'prcl_61afe429019a4de2a4c7f8d4adbcea28'
            },
            // options: {
            //     additional_handling: true,
            // }
        }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //         // predefined_package: "Carton"
        //     }
        // })
    ],
    carrier_accounts: [{"id":"ca_ab7cca42bab8490baf712016ee905deb"}],
});

order.save().then(console.log).catch(console.log);


// without po box adr_db1209309b9443c68d61320cee857d41
// with po box adr_f49114c38e7c4f99bd3ad5fcbffdca02