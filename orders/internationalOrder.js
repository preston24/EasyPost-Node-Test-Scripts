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



    // company: "Daniele Daher",
    // name: '5148272170',
    // street1: '11275 rue Gilles-Villeneuve',
    // street2: '',
    // city: 'MIRABEL',
    // state: 'QC',
    // zip: 'J7J 1T8',
    // country: 'CA',
    // phone: '9058212111',
    // email: '',
});

const fromAddress = new api.Address({
    company: "IMPACT CANOPIES CANADA",
    name: "SHIPPING DEPT",
    street1: "1371 KEBET WAY",
    street2: "",
    city: "Toronto",
    state: "ON",
    zip: "M5G 1X5",
    country: "CA",
    phone: "6044641371",
    email: "vanshipping@impactcanopy.com",


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




    // company: "NEMCOR MAIN WAREHOUSE",
    // name: '',
    // street1: '501 Franklin Blvd',
    // street2: '',
    // city: 'Cambridge',
    // state: 'ON',
    // zip: 'N1R 8G9',
    // country: 'CA',
    // phone: '5197400595',
    // email: '',
});





const customs_info = {
    eel_pfc: "NOEEI 30.37(a)",
    customs_certify: true,
    customs_signer: 'Tim Peterson',
    contents_type: 'other',
    restriction_type: 'none',
    restriction_comments: '',
    non_delivery_option: 'return',
    contents_explanation: 'Nutritional Supplements',
    // declaration: '',
    customs_items: [
        new api.CustomsItem({
            'description': 'MusclePharm Combat XL Mass Gainer - 12lbs Vanilla',
            'quantity': 1,
            'weight': 192,
            'value': 47.99,
            // 'hs_tariff_number': '852352',
            'origin_country': 'US',
            'code': 'MPH0213',
        }),
    ],
  };


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
    customs_info: customs_info,
    shipments: [
        new api.Shipment({
            parcel: {
                weight: 1.25,
                width: 7.5,
                height: 10.5,
                length: 4.5,
            },
            customs_info
        }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //     },
        //     // customs_info2
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //     },
        //     // customs_info3
        // }),
        // new api.Shipment({
        //     parcel: {
        //         weight: 17.5,
        //         width: 8,
        //         height: 3,
        //         length: 10,
        //     },
        //     // customs_info4
        // }),
    ],
    // carrier_accounts: [{"id":"ca_e5ecb8da97d643349f1c57ccd143eb91"}, {"id":"ca_b281591570e24e0c961a09901a5c2b57"}],
    carrier_accounts: [ {"id":"ca_ee4c27915ef845f49f43f9302a7aa21f"}],
});

order.save().then(console.log).catch(console.log);