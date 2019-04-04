require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey
const api = new Easypost(apiKey);



/* Either objects or ids can be passed in for addresses and
 * shipments. If the object does not have an id, it will be
 * created. */


// set addresses
const toAddress = new api.Address({
    // company: "",
    // name: "Alberto Vazquez Moscosa",
    // street1: "Paseo de la Reforma 342",
    // street2: "piso 26 oficina 2649",
    // city: "Colonia Juarez, Delegacion Cuauhtemoc",
    // state: "DF",
    // zip: "06600",
    // country: "MX",
    // phone: "5215539015203",
    id: 'adr_2d1a74c593fa4bb9b8055363b9a00173'
});

const fromAddress = new api.Address({
    // name: "baller brand",
    // street1: "Benito Juarez 2535",
    // city: "CAPITAL FEDERAL",
    // state: "CAPITAL FEDERAL",
    // zip: "1125",
    // country: "AR",
    // phone: "5491159811530",
    id: 'adr_47102e47787c4cafae512ed819c86064'
});

// const customsInfo = new api.CustomsInfo({
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: false,
//     customs_signer: '',
//     contents_type: 'merchandise',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'T-Shirts',
//     declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'T-Shirts',
//             'quantity': 1,
//             'weight': 10.582,
//             'value': 524.97,
//             'hs_tariff_number': '852352',
//             'origin_country': 'AR',
//             'currency': 'MXN',
//         })],
// });


const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    shipments: [
        new api.Shipment({
            parcel: {
                length: 24,
                width: 24,
                height: 18,
                weight: 1136,
                // id: ''
            },
            // options: {
            //     additional_handling: true,
            // }
            // customs_info: customsInfo,
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
    carrier_accounts: [{"id":"ca_09df5bb08bab4da3aeb7b26ce6a79a1d"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
});

order.save().then(console.log).catch(console.log);