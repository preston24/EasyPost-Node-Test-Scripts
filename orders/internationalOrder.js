require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
    name: "Canadian Tire (E-Commerce)",
    street1: "1210 STEELES AVENUE EAST",
    street2: "",
    city: "MILTON",
    state: "ON",
    zip: "L9T6R1",
    country: "CA",
    phone: "9058782349",
    email: "Orders@Drexel.ca",

    // company: "THE TESTING CO.",
    // name: 'MR. TEST',
    // street1: '358 S 700 E',
    // street2: 'STE B',
    // city: 'Salt Lake City',
    // state: 'UT',
    // zip: '84102',
    // country: 'US',
    // phone: '4165555556',
    // email: 'TEST123@YOPMAIL.COM',
});

const fromAddress = new api.Address({
    // company: "IMPACT CANOPIES CANADA",
    // name: "SHIPPING DEPT",
    // street1: "1371 KEBET WAY",
    // street2: "",
    // city: "Toronto",
    // state: "ON",
    // zip: "M5G 1X5",
    // country: "CA",
    // phone: "6044641371",
    // email: "vanshipping@impactcanopy.com",


    company: "THE TESTING CO.",
    name: 'MR. TEST',
    street1: '358 S 700 E',
    street2: 'STE B',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84102',
    country: 'US',
    phone: '4165555556',
    email: 'TEST123@YOPMAIL.COM',
});


// const customs_info = {
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: true,
//     customs_signer: 'Tim Peterson',
//     contents_type: 'other',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'Nutritional Supplements',
//     // declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'MusclePharm Combat XL Mass Gainer - 12lbs Vanilla',
//             'quantity': 1,
//             'weight': 192,
//             'value': 47.99,
//             // 'hs_tariff_number': '852352',
//             'origin_country': 'US',
//             'code': 'MPH0213',
//         }),
//     ],
//   };


//   const customs_info2 = {
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: true,
//     customs_signer: 'Tim Peterson',
//     contents_type: 'other',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'Nutritional Supplements',
//     // declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'Myprotein Impact Weight Gainer V2 - 11lbs Chocolate Smooth',
//             'quantity': 2,
//             'weight': 704,
//             'value': 70.0,
//             // 'hs_tariff_number': '852352',
//             'origin_country': 'US',
//             'code': 'MYP0134',
//         }),
//     ],
//   };


//   const customs_info3 = {
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: true,
//     customs_signer: 'Tim Peterson',
//     contents_type: 'other',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'Nutritional Supplements',
//     // declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'MusclePharm Combat XL Mass Gainer - 12lbs Vanilla',
//             'quantity': 1,
//             'weight': 192,
//             'value': 47.99,
//             // 'hs_tariff_number': '852352',
//             'origin_country': 'US',
//             'code': 'MPH0213',
//         }),
//     ],
//   };


//   const customs_info4 = {
//     eel_pfc: "NOEEI 30.37(a)",
//     customs_certify: true,
//     customs_signer: 'Tim Peterson',
//     contents_type: 'other',
//     restriction_type: 'none',
//     restriction_comments: '',
//     non_delivery_option: 'return',
//     contents_explanation: 'Nutritional Supplements',
//     // declaration: '',
//     customs_items: [
//         new api.CustomsItem({
//             'description': 'Myprotein Impact Weight Gainer V2 - 11lbs Chocolate Smooth',
//             'quantity': 2,
//             'weight': 704,
//             'value': 70.0,
//             // 'hs_tariff_number': '852352',
//             'origin_country': 'US',
//             'code': 'MYP0134',
//         }),
//     ],
//   };



const order = new api.Order({
    to_address: toAddress,
    from_address: fromAddress,
    // customs_info: customs_info,
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 17.5,
                width: 8,
                height: 3,
                length: 10,
                // id: 'prcl_3ac7a76d57fd4927a2aa5ad75fbc637c'
            },
            customs_info
        }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //         // id: 'prcl_2d79d00b2a0449ee89f5a40b470f7338'
        //     },
        //     customs_info2
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //         // id: 'prcl_25ac1d6f51a9433fa831005dc7091eab'
        //     },
        //     // customs_info3
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //         // id: 'prcl_86b7cb54192a4bc380a3af9f44116e83'
        //     },
        //     // customs_info4
        // }),
    ],
    // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
    carrier_accounts: [ {"id":"ca_bb4b66b0ff1d4784abe63c81dce69ef7"}],
});

order.save().then(console.log).catch(console.log);