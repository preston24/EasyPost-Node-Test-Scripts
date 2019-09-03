require('dotenv').config();


const Easypost = require('@easypost/api');
// const apiKey = process.env.testKey;
const apiKey = process.env.prodKey;
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
    name: "The Dude",
    street1: "45 Morningside Manor",
    street2: "",
    city: "Airdrie",
    state: "AB",
    zip: "T4B0K2",
    country: "CA",
    phone: "1234567890",
    email: "email@email.com",
});

const fromAddress = new api.Address({
    name: "The Dude",
    street1: "945A SOUTHGATE DR",
    street2: "",
    city: "GUELPH",
    state: "ON",
    zip: "N1L0B9",
    country: "CA",
    phone: "1234567890",
    email: "email@email.com",
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
    // customs_info: customsInfo,
    shipments: [
        new api.Shipment({
            parcel: {
                // weight: 17.5,
                // width: 8,
                // height: 3,
                // length: 10,
                id: 'prcl_2d79d00b2a0449ee89f5a40b470f7338'
            },
            // customs_info
        }),
        new api.Shipment({
            parcel: {
                // weight: 17.5,
                // width: 8,
                // height: 3,
                // length: 10,
                id: 'prcl_3ecf0572c1a64d2e8f7e001fba7b9f69'
            },
            // customs_info2
        }),
        // new api.Shipment({
        //     parcel: {
        //         // weight: 17.5,
        //         // width: 8,
        //         // height: 3,
        //         // length: 10,
        //         id: 'prcl_25ac1d6f51a9433fa831005dc7091eab'
        //     },
        //     // customs_info3
        // }),
        // new api.Shipment({
        //     parcel: {
        //         // weight: 17.5,
        //         // width: 8,
        //         // height: 3,
        //         // length: 10,
        //         id: 'prcl_86b7cb54192a4bc380a3af9f44116e83'
        //     },
        //     // customs_info4
        // }),
    ],
    // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
    carrier_accounts: [ {"id":"ca_792303b8961b4d3296604c5b3d027cb5"}],
});

order.save().then(console.log).catch(console.log);


