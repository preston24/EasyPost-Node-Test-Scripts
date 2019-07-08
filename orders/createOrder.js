require('dotenv').config();


const Easypost = require('@easypost/api');
const apiKey = process.env.testKey;
// const apiKey = process.env.prodKey
const api = new Easypost(apiKey);


// set addresses
const toAddress = new api.Address({
    name: "The Dude",
    street1: "Summit House",
    street2: "Athey St",
    city: "Macclesfield",
    state: "Cheshire",
    zip: "SK116QU",
    country: "GB",
    phone: "1234567890",
    email: "email@email.com",
    // id: 'adr_89f06d4b3f3d4081b5466166d6d924ef'
});

const fromAddress = new api.Address({
    name: "The Dude",
    street1: "Summit House",
    street2: "Athey St",
    city: "Macclesfield",
    state: "Cheshire",
    zip: "SK116QU",
    country: "GB",
    phone: "1234567890",
    email: "email@email.com",
    // id: 'adr_e7bd97fbea5243b0b8d27a70b90efbde'
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
                id: 'prcl_f4c09fc8c09649b8a22a10f471b421d2'
            },
            // customs_info
        }),
        new api.Shipment({
            parcel: {
                // weight: 17.5,
                // width: 8,
                // height: 3,
                // length: 10,
                id: 'prcl_3c6eacb082ed44daa93922ca40334f43'
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
    carrier_accounts: [ {"id":"ca_4e6adbf3b21e44d4995ae42159ece47d"}],
});

order.save().then(console.log).catch(console.log);
